declare module "react-usa-map" {
  import { ComponentType, MouseEvent } from "react";

  interface USAMapProps {
    onClick?: (event: MouseEvent<SVGPathElement>) => void;
    width?: number | string;
    height?: number | string;
    title?: string;
    defaultFill?: string;
    customize?: Record<string, { fill?: string; clickHandler?: (event: MouseEvent<SVGPathElement>) => void }>;
  }

  const USAMap: ComponentType<USAMapProps>;
  export default USAMap;
}
