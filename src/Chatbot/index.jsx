import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};

const CHATBOT_THEME = {
  background: "rgb(249, 249, 249)",
  fontFamily: "Roboto",
  headerBgColor: "linear-gradient(to right, #ff69df,#a990ff)",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#ff69df",
  botFontColor: "#fff",
  userBubbleColor: "#a990ff",
  userFontColor: "#fff"
};


function GoToPage(){
  window.open('http://localhost:5000/', "_blank");
  return <p>Great! It's our pleasure to have you as a member of our family!</p>
  }


const ChatBotHelper = () => {
  const steps = [
      {
        id: "1",
        message: "Welcome Friend!",
        trigger: "2"
      },
      {
        id: "2",
        message: "I'm Maxim! a chatbot that will help you to select your collage major!",
        trigger: "3"
      },
      {
        id: '3',
        message: 'What is your name?',
        trigger: '4'
      },
      {
        id: '4',
        user: true,
        trigger: '5'
      },
      {
        id: '5',
        message: 'Hi {previousValue}, nice to meet you!',
        trigger: '6'
      },
      {
        id: "6",
        message: "Have You registered?",
        trigger: "7"
      },
      {
        id: "7",
        options: [
          { value: 1, label: "Yes!", trigger: "8" },
          { value: 2, label: "Not yet", trigger: "9" }
        ]
      },

      {
        id: "8",
        message: "Great! It's our pleasure to have you as a member of our family!",
        trigger: "11"
      },

      {
        id: "9",
        options: [
          { value: 1, label: "Register Now!!", trigger: "10" },
          { value: 2, label: "Later", trigger: "11" }
        ]
      },    
      {
        id: '10',
        component: <GoToPage />,
        asMessage: true,
        trigger: '11'
        },
      {
        id: "11",
        message: "Wanna help you selecting your collage major?",
        trigger: "12"
      },
      {
        id: "12",
        options: [
          { value: 1, label: "Let's Go!!", trigger: "13" },
          { value: 2, label: "No Thanks!", end: true}
        ]
      },
      {
        id: "13",
        message: "Yey! I'll ask you some questions then process your answers to suggest you some collage majors that could match your intrests, don't hurry! take your time to think then reply ",
        trigger: "14"
      },


/* Group "S - Social "
   // Qs if ends with "No" will proceed to Group-I
        Do you enjoy learning about other cultures?
        Are you interested in healing people ? 
        Do you enjoy teaching or training people?

  // Qs will Continue with Group-S whatever the answer 
        Do you like to solve people problems? 
        Do you like helping others?
        Do you like to work in teams ? 
      */


/* Group " I - Investigator "

      1. Do you enjoy trying to figure out how things work ? 

      2. Do you like to do puzzels? 
      
      3. Can you solve math problems? 
      
      4. Do you consider yourself as a logical person?
      
      5. Do you like to perform lab experiments? 
      
      6. Do you like to be challenged ?
*/

      {
        id: "14",
        message: "Do you consider yourself as a logical person ?",
        trigger: "15"
      },  
    
      {id: "15",
      options: [
        { value: 1, label: "Yes", trigger: "32" }, // "Yes" Goes to Group-I
        { value: 2, label: "No", trigger: "16" }, // "No" Goes to Group-S
      ]
    },
    {
      id: "16",
      message: "Do you enjoy learning about other cultures ?",
      trigger: "17"
    },  
    {id: "17",
    options: [ 
      { value: 1, label: "Yes", trigger: "18" }, 
      { value: 2, label: "No", trigger: "28"}, // "No" Goes to Group-I
    ]
  },
  {
    id: "18",
    message: "Are you interested in healing people ?",
    trigger: "19"
  }, 
  {id: "19",
  options: [ 
    { value: 1, label: "Yes", trigger: "20" }, 
    { value: 2, label: "No", trigger: "28"}, // "No" Goes to Group-I
  ]  
  },
  {
    id: "20",
    message: "Do you enjoy teaching or training people ?",
    trigger: "21"
  }, 
  {id: "21",
  options: [ 
    { value: 1, label: "Yes", trigger: "22" }, 
    { value: 2, label: "No", trigger: "28"}, // "No" Goes to Group-I
  ]  
  },
  {
    id: "22",
    message: "Do you like to solve people problems ?",
    trigger: "23"
  }, 
  {id: "23",
  options: [ 
    { value: 1, label: "Yes", trigger: "24" },
    { value: 2, label: "No", trigger: "24"},
  ]  
  },
  {
    id: "24",
    message: "Do you like helping others ?",
    trigger: "25"
  }, 
  {id: "25",
  options: [ 
    { value: 1, label: "Yes", trigger: "26" },
    { value: 2, label: "No", trigger: "26"},
  ]  
  },
  {
    id: "26",
    message: "Do you like to work in teams ?",
    trigger: "27"
  }, 
  {id: "27",
  options: [ 
    { value: 1, label: "Yes", trigger: "28" },
    { value: 2, label: "No", trigger: "28"},
  ]  
  },
  {
    id: "28", // Done the test 
    message: "Congrats! You have done the test! Wait a moment I'll generate a list of suggested majors that matches your answers",
    //delay
    trigger: "29"
  }, 


  /*S = Social
These people like to work with other people,
rather than things. Good college majors for
Social people are…
• Counseling
• Nursing
• Physical Therapy
• Travel
• Advertising
• Public Relations
• Education

Related Pathways you can look for are..
Health Services
Public and Human Services
*/
  {
    id: "29", //
    message: " Depending on Holnd Test, you belog to 'Social People' group which includes people who like to work with other people, rather than things.",
    trigger: "30"
  }, 
  {
    id: "30", // Result of suggested Majors 
    component: (
      <body>
        <b>Good college majors for Social people are…</b><br/>
            • Counseling <br/>
            • Nursing <br/>
            • Physical Therapy <br/>
            • Travel <br/>
            • Advertising <br/>
            • Public Relations <br/>
            • Education 
      </body>
    ),
    trigger: "31"
  }, 
  {
    id: "31", // Result of suggested Majors 
    component: (
      <body>
      <b>Related Pathways you can look for are..</b><br/>
          • Health Services<br/>
          • Public and Human Services 
      </body>
    ),
    trigger: "32"
  }, 
  {
    id: "32", // Replay or End ?
    message: " Wanna do the test again ? ",
    trigger: "33"
  }, 
  {id: "33",
  options: [ 
    { value: 1, label: "Yes, please! ", trigger: "14" },
    { value: 2, label: "No, Thanks!", end: true},
  ]  
  },
  {
    id: "34",
    message: "(Group-I Question)",
    trigger: "35"
  }, 
  {id: "35",
  options: [ 
    { value: 1, label: "Yes", trigger: "34" },
    { value: 2, label: "No", trigger: "34"},
  ]  
  },
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
