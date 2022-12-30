export const buildElement = (el_type, class_name, content) => {
  const element = document.createElement(el_type);
  if (class_name) element.classList.add(class_name);
  if (content) element.innerHTML = content;

  return element;
};