import './App.css';
import Calendar from './components/Calendar';

function App(props) {
  return (
    <>
      <Calendar />
    </>
  );
}

export default App;

/*
  Жизненный цикл Копонента:
  (детально можно посмотреть в диаграмме)

  1. Монтирование (рождение) => componentDidMount
  2. Обновление (жизнь) => componentDidUpdate
  3. Размонтирование (смерть) => componentWillUnmount
_______________________________________________________________________________

  Порядок действий на примере нашего секундомера:
  1- constructor
  2- render
  3- componentDidMount -> содержит this.start() -> к-й сожержит setState
  4- render (постоянно обновляет состояние)
  5- componentDidUpdate (и по кругу 4-5 пункт) render, didUpdate...
_______________________________________________________________________________

  Что вызывает обновление состояния в React?
  a. Новые Props
  b. setState()
  c. forceUpdate() - плохая практика
_______________________________________________________________________________

  Методы жизненных циклов:
  1) "componentDidMount()"
    => СРАБАТЫВАЕТ ПОСЛЕ ПЕРВОГО РЕНДЕРА
    Вызывается сразу после монтирования (то есть, вставки компонента в DOM).

  2) "componentDidUpdate(prevProps, prevState, snapshot)"
    => СРАБАТЫВАЕТ ПОСЛЕ КАЖДОГО РЕНДЕРА, ИСКЛЮЧАЯ ПЕРВЫЙ
    Вызывается сразу после обновления. Не вызывается при первом рендере. Метод позволяет работать с DOM при обновлении компонента.

  3) "componentWillUnmount()"
    => РАЗМОНТИРУЕТ (ОСТАНАВЛИВАЕТ) КОМПОНЕНТ
    Вызывается непосредственно перед размонтированием и удалением компонента. В этом методе выполняется необходимый сброс: отмена таймеров, сетевых запросов и подписок, созданных в componentDidMount().


    render() не сам отрисовывает вьюху, а возвращает Виртуальный DOM. Который в последствии сравнивается React'ом с настоящим DOM (согласование).
_______________________________________________________________________________

  Заметка!

  Обычно мы юзаем this.setState({ obj }) <- внутри которого объект.

  Но когда наше состояние зависит от прошлого, мы должны использовать функцию, а не объект
    => this.setState((state,props)=>{})

  В примере
  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const timeCopy = new Date(time.getTime());
      timeCopy.setSeconds(time.getSeconds() + 1);
      return {
        time: timeCopy,
      };
    });
  };

  Мы из функции - возвращаем новый объект состояния.
_______________________________________________________________________________

  Модули стилей:
  1. Переименовываем style.css => style.module.css
  2. Импортируем как модуль => imp
  3. При назначении какому-нибудь элементу className={style.container} <= класс назначаем по переменной.

  + Если 2 класса одному элементу - используем шаблонную строку.
  + И чтобы не было коллизии вместо названия style.module.css -> писать имя файла. Т.к. это очень редко, но может произойти коллизия хэш-функций и совпадет названия.

  Итог: Даже при одинаковых названиях классов, Webpack сгенерирует свое уникальное имя для класса (filename+classname+hash)

_______________________________________________________________________________

  Вместо reset.css используется normalize , т.е. приведение стилей к какому-то общему виду.

  Для подключения normalize -> пишем в общем файле стилей index.css -> @import-normalize;

  Но мы так же можем подключить reset.css в index.js файле. (до других стилей)

_______________________________________________________________________________


  🔥 Тема: Date FNS 🔥

  Устанавливаем бибилотеку Date fns

  "npm i date fns"

  Помогает работать с родной JS датой.

  Фичи смотреть по разделам в либе.

*/
