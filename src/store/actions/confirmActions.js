export const SHOW_CONFIRM = "SHOW_CONFIRM";
export const HIDE_CONFIRM = "HIDE_CONFIRM";

export const show_confirm = (type, question, onConfirm) => {
  return {
    type: SHOW_CONFIRM,
    payload: {
      question,
      onConfirm,
      type,
    },
  };
};

export const hide_confirm = () => {
  return {
    type: HIDE_CONFIRM,
  };
};
