import "./App.css";
import { Card } from "./Card";

function App() {
  var data1 = [

    { 
      list: "Single User",
     texttype: " ",
      icontype: "fa fa-check"

     },

    {
      list: "5GB Storage",
      texttype: " ",
      icontype: "fa fa-check",
    },

    {
      list: "Unlimited Public Projects",
      texttype: " ",
      icontype: "fa fa-check",
    },

    {
      
      list: "Community Access", 
      texttype: " ",
       icontype: "fa fa-check"
      
      },

    {
      list: "Unlimited Private Projects",
      texttype: "text-muted ",
      icontype: "fa fa-times",
    },

    {
      list: "Dedicated Phone Support",
      texttype: "text-muted",
      icontype: "fa fa-times",
    },

    {
      list: "Free Subdomain",
      texttype: "text-muted ",
      icontype: "fa fa-times",
    },

    {
      list: "Monthly Status Reports",
      texttype: "text-muted",
      icontype: "fa fa-times",
    },

  ];


  var data2 = [
    {
      list: "5 Users",
      texttype: " ",
      icontype: "fa fa-check",
    },

    {
      list: "50GB Storage",
      texttype: " ",
      icontype: "fa fa-check",
    },

    {
      list: "Unlimited Public Projects",
      texttype: " ",
      icontype: "fa fa-check",
    },

    { list: "Community Access",
     texttype: " ",
      icontype: "fa fa-check" 
    },

    {
      list: "Unlimited Private Projects",
      texttype: " ",
      icontype: "fa fa-check",
    },
    { list: "Dedicated Phone Support",
     texttype: " ",
      icontype: "fa fa-check" 
    },

    { 
      list: "Free Subdomain", 
    texttype: " ",
     icontype: "fa fa-check"
     },
     
    {
      list: "Monthly Status Reports",
      texttype: "text-muted",
      icontype: "fa fa-times",
    },
  ];

  

  var data3 = [

    { list: "Unlimited Users",
     texttype: " ",
      icontype: "fa fa-check"
     },

    { list: "150GB Storage",
     texttype: " ",
      icontype: "fa fa-check"
     },

    {
      list: "Unlimited Public Projects",
      texttype: " ",
      icontype: "fa fa-check",
    },

    { 
      list: "Community Access",
     texttype: " ",
      icontype: "fa fa-check"
     },


    {
      list: "Unlimited Private Projects",
      texttype: " ",
      icontype: "fa fa-check",
    },


    { 
      list: "Dedicated Phone Support",
     texttype: " ",
      icontype: "fa fa-check"
     },


    {
      list: "Unlimited Free Subdomain",
      texttype: " ",
      icontype: "fa fa-check",
    },


    { 
      list: "Monthly Status Reports",
     texttype: "", 
     icontype: "fa fa-check"
    
    },
  ];

  return (
    <div className="App">
      <div className="cardParent">
        <Card pricetitle="FREE" price="$0" listofdata={data1} />
        <Card pricetitle="PLUS" price="$9" listofdata={data2} />
        <Card pricetitle="PRO" price="$49" listofdata={data3} />
      </div>
    </div>
  );
}

export default App;
