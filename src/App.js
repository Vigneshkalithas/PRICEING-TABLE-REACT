import logo from './logo.svg';
import './App.css';
import { Card } from './Card';



function App() {
  var paragraph1=[
{list:"Single User",texttype:" ",icontype:"fa fa-check"},
{list:"5GB Storage",texttype:" ",icontype:"fa fa-check"},
{list: "Unlimited Public Projects",texttype:" ",icontype:"fa fa-check"},
{list: "Community Access",texttype:" ",icontype:"fa fa-check"},
{list: "Unlimited Private Projects",texttype:"text-muted ",icontype:"fa fa-times"},
{list: "Dedicated Phone Support",texttype:"text-muted ",icontype:"fa fa-times"},
{list:"Free Subdomain",texttype:"text-muted ",icontype:"fa fa-times"},
{list:"Monthly Status Reports",texttype:"text-muted",icontype:"fa fa-times"},
]
 var paragraph2=[
      {list:"5 Users",texttype:" ",icontype:"fa fa-check"},
      {list:"50GB Storage",texttype:" ",icontype:"fa fa-check"},
      {list: "Unlimited Public Projects",texttype:" ",icontype:"fa fa-check"},
      {list: "Community Access",texttype:" ",icontype:"fa fa-check"},
      {list: "Unlimited Private Projects",texttype:" ",icontype:"fa fa-check"},
      {list:"Dedicated Phone Support",texttype:" ",icontype:"fa fa-check"},
      {list:"Free Subdomain",texttype:" ",icontype:"fa fa-check"},
      {list:"Monthly Status Reports",texttype:"text-muted",icontype:"fa fa-times"},
]
  var paragraph3=[
      {list:"Unlimited Users",texttype:" ",icontype:"fa fa-check"},
      {list:"150GB Storage",texttype:" ",icontype:"fa fa-check"},
      {list: "Unlimited Public Projects",texttype:" ",icontype:"fa fa-check"},
      {list: "Community Access",texttype:" ",icontype:"fa fa-check"},
      {list: "Unlimited Private Projects",texttype:" ",icontype:"fa fa-check"},
      {list:"Dedicated Phone Support",texttype:" ",icontype:"fa fa-check"},
      {list:"Unlimited Free Subdomain",texttype:" ",icontype:"fa fa-check"},
      {list:"Monthly Status Reports",texttype:"",icontype:"fa fa-check"},
     ]

  return (
    <div className="App">
      <div className='cardParent'>
      <Card pricetitle="FREE" price="$0" listofdata={ paragraph1 }/>
      <Card pricetitle="PLUS" price="$9" listofdata={ paragraph2 }/>
      <Card pricetitle="PRO" price="$49" listofdata={ paragraph3 }/>
      </div>
    </div>
  );
}

export default App;
