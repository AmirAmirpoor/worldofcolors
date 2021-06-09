export const CLOSE_PANEL = "CLOSE_PANEL";
export const OPEN_PANEL = "OPEN_PANEL";

export const close_panel = () => {
  return {
    type: CLOSE_PANEL,
  };
};

export const open_panel = () => {
  return {
    type: OPEN_PANEL,
  };
};
