import React from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  show: boolean;
};
const PanelView = ({ children, show }: Props) => (show ? children : null);
export default PanelView;
