const handleClic = (event: Event) => {
    const element = event.target as HTMLElement;
    console.log('click', element.dataset.value);
};

const nodeList = document
    .querySelectorAll('')
    .addEventListener('click', handleClic);

nodeList.forEach((item) => item.addEventListener('click', handleClic));
