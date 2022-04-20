import Header from "./components/Header";
import Search from "./components/Search";
import Advertising from "./components/Advertising";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

function App() {
  const searchСategories = [{title: ""}, {title: ""}, {title: ""}]
  const advertising = {image: ''}
  const weather = ['Облачно', '+17', 'Днём: +17', 'Ночью: +10']
  const visited = ['', '', '']
  const germanyMap = ['']
  const programTv = ['', '', '']
  const ether = ['', '', '']
  return (
    <>
    <Header/> {/*   Отвечает за отображение трёх компонентов в шапке сайта */}
    <Search searchСategories = {searchСategories}/> {/*  Отвечает за отображение виджета поиска */}
    <Advertising advertising = {advertising}/> {/*Отвечает за отображение рекламы   */}
    <Section className='list' items={weather} title = "Погода">{/* Отвечает за отображение виджетов на различные темы */}
    {items=> items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
    </Section>
    <Section className='list' items={visited} title = "Посещаемое">{/* Отвечает за отображение виджетов на различные темы */}
    {items=> items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
    </Section>
    <Section className='list' items={germanyMap} title = "Карта Германии">{/* Отвечает за отображение виджетов на различные темы */}
    {items=> items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
    </Section>
    <Section className='list' items={programTv} title = "Телепрограмма">{/* Отвечает за отображение виджетов на различные темы */}
    {items=> items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
    </Section>
    <Section className='list' items={ether} title = "Эфир">{/* Отвечает за отображение виджетов на различные темы */}
    {items=> items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
    </Section>
    </>
  );
}

export default App;
