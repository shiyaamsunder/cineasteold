import { Wrapper } from "./skeletons";

export interface ISkeletonLayoutProps {
  width?: number | string;
  height?: number | string;
}

export const Skeleton = ({ width, height }: ISkeletonLayoutProps) => (
  <Wrapper width={width} height={height} />
);
