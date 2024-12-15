const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    let accordionHeight = accordion.clientHeight;
    const title = accordion.querySelector('.title');
    const accordionTitleHeight = title.clientHeight;
    if (title) {
        title.addEventListener('click', () => {
            accordion.classList.toggle('active');
            title.classList.toggle('active');
            const expandAccordion = title.querySelector('.expand__accordion');
            const information = accordion.querySelector('.information');
            if (expandAccordion) {
                expandAccordion.classList.toggle('active');
            }
            if (information) {
                const accordionInfoHeight = information.clientHeight;
                console.log(accordionInfoHeight);
                information.classList.toggle('active');

                if (accordionHeight === accordionTitleHeight) {
                    accordionHeight = (accordionTitleHeight + accordionInfoHeight);
                    accordion.style.height = accordionHeight + 20 + 'px';
                } else {
                    accordionHeight = accordionTitleHeight;
                    accordion.style.height = accordionHeight + 'px';
                }
            }
        });
    }
});
const userData = [
    {
      title: 'What this site is?!',
      content: `
      <p>This site is just a joke, relax)</p>
      `
    },
    {
      title: 'Do this clones are real?',
      content: `
        <p>Of cource no.</p>
      `
    },
    {
      title: 'What this site is?!',
      content: `
      <p>This site is just a joke, relax)</p>
      `
    },
    {
      title: 'Do this clones are real?',
      content: `
        <p>Of cource no.</p>
      `
    },
  ];
  
  function Accordion(data, element) {
    data.map(item => {
      const accordionElement = document.createElement('div');
      accordionElement.classList.add('accordion');
      accordionElement.innerHTML = `
      <button class="accordion__trigger transparent" onclick="triggerAccordion(event)">
        <p>${item.title}</p>
        <img src="./public/images/icons/add.svg" alt="add" class="accordion__trigger__icon">
      </button>
      <div class="accordion__container">
        <div class="accordion__content">
          ${item.content}
        </div>
      </div>
      `
      element.append(accordionElement);
    });
  }
  
  try {
    Accordion(userData, document.querySelector('#faq'));
  } catch (error) {
    console.log(error);
  }
  
  function triggerAccordion(event) {
    const accordionTriggerElement = event.currentTarget;
    const accordionElement = accordionTriggerElement.parentElement;
    const accordionContainerElement = accordionElement.querySelector('.accordion__container');
  
    if (accordionElement.classList.contains('open')) {
      accordionContainerElement.style.maxHeight = '';
    } else {
      accordionContainerElement.style.maxHeight = accordionContainerElement.scrollHeight + 'px';
    }
  
    accordionElement.classList.toggle('open');
  
    accordionTriggerElement.classList.toggle('selected');
  }