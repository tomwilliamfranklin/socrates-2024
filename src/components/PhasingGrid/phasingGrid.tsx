import { componentProps } from "components/baseComponent";
import * as React from "react";

type PhasingGridConfig = {
  cellSize?: number;
  color?: string;
  gridColor?: string;
  gridOpacity?: number;
  density?: number;
  minDuration?: number;
  maxDuration?: number;
  minPeak?: number;
  maxPeak?: number;
};

type Props = componentProps & {
  config?: PhasingGridConfig;
};

type State = {
  width: number;
  height: number;
};

const defaults: Required<PhasingGridConfig> = {
  cellSize: 40,
  color: "var(--accent)",
  gridColor: "var(--whiteColor-dark)",
  gridOpacity: 0.05,
  density: 0.025,
  minDuration: 4,
  maxDuration: 10,
  minPeak: 0.08,
  maxPeak: 0.2,
};

export class PhasingGrid extends React.Component<Props, State> {
  state = {
    width: 0,
    height: 0,
  };

  private svgRef = React.createRef<SVGSVGElement>();
  private containerRef = React.createRef<HTMLDivElement>();
  private resizeObserver: ResizeObserver | null = null;

  private buildGrid(w: number, h: number) {
    const svg = this.svgRef.current;
    if (!svg || w === 0 || h === 0) return;

    svg.innerHTML = "";

    const cfg: Required<PhasingGridConfig> = {
      ...defaults,
      ...this.props.config,
    };
    const ns = "http://www.w3.org/2000/svg";

    const cols = Math.ceil(w / cfg.cellSize);
    const rows = Math.ceil(h / cfg.cellSize);
    const totalCells = cols * rows;

    const litCells = new Set<number>();
    while (litCells.size < Math.floor(totalCells * cfg.density)) {
      litCells.add(Math.floor(Math.random() * totalCells));
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const rect = document.createElementNS(ns, "rect");
        rect.setAttribute("x", String(c * cfg.cellSize));
        rect.setAttribute("y", String(r * cfg.cellSize));
        rect.setAttribute("width", String(cfg.cellSize));
        rect.setAttribute("height", String(cfg.cellSize));

        if (litCells.has(idx)) {
          const dur = (
            cfg.minDuration +
            Math.random() * (cfg.maxDuration - cfg.minDuration)
          ).toFixed(2);
          const delay = (Math.random() * 8).toFixed(2);
          const peak = (
            cfg.minPeak +
            Math.random() * (cfg.maxPeak - cfg.minPeak)
          ).toFixed(2);

          const kfStyle = document.createElementNS(ns, "style");
          kfStyle.textContent = `
            @keyframes phase-${idx} {
              0%   { opacity: 0; }
              50%  { opacity: ${peak}; }
              100% { opacity: 0; }
            }
          `;
          svg.appendChild(kfStyle);

          rect.setAttribute("fill", cfg.color);
          rect.setAttribute("stroke", cfg.color);
          rect.setAttribute("stroke-width", "0.5");
          rect.style.opacity = "0";
          rect.style.animation = `phase-${idx} ${dur}s ease-in-out -${delay}s infinite`;
        } else {
          rect.setAttribute("fill", "none");
          rect.setAttribute("stroke", cfg.gridColor);
          rect.setAttribute("stroke-width", "0.5");
          rect.setAttribute("opacity", String(cfg.gridOpacity));
        }

        svg.appendChild(rect);
      }
    }
  }

  componentDidMount() {
    const container = this.containerRef.current;
    if (!container) return;

    this.resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      this.setState({ width, height }, () => {
        this.buildGrid(width, height);
      });
    });

    this.resizeObserver.observe(container);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.config !== this.props.config) {
      this.buildGrid(this.state.width, this.state.height);
    }
  }

  componentWillUnmount() {
    this.resizeObserver?.disconnect();
    if (this.svgRef.current) {
      this.svgRef.current.innerHTML = "";
    }
  }

  render() {
    const { width, height } = this.state;

    return (
      <div
        ref={this.containerRef}
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      >
        <svg
          ref={this.svgRef}
          width={width}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
        />
      </div>
    );
  }
}

// --- Usage ---
//
// Give the parent a size and PhasingGrid fills it:
//
//   <div style={{ width: "100%", height: "100vh", position: "relative" }}>
//     <PhasingGrid />
//   </div>
//
// With config:
//   <PhasingGrid config={{
//     color: "#6366f1",
//     cellSize: 50,
//     density: 0.12,
//   }} />
