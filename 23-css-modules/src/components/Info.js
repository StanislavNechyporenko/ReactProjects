import './Info.css';
import styles from './Info.module.css';

// styles в таком случае будет объектом, с определенным набором свойств,
// и этот объект создается автоматически. Все что необходимо сделать,
// это воспользоватся точечной нотацией, для того, что бы получить доступ к названиям определенных классов,
// которые были сгенерированы автоматически.

console.log(styles);

// {
//     "info": "Info_info__Uzz2d",
//     "myOtherButton": "Info_myOtherButton__GWiZA"
// }
//     - это объект который мы импортируем из файла module.css

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading in the Info</h2>
      <button className="my-button">Click me in the Info component</button>
      <button className={styles.myOtherButton}>
        Button with local CSS styles
      </button>
    </div>
  );
}

export default Info;
