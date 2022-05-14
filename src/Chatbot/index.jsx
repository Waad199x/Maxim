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
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#FFBFB5",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "#fff",
  userBubbleColor: "#FFBFB5",
  userFontColor: "#fff"
};

const ChatBotHelper = () => {
  const steps = [
      {
        id: "1",
        message: "Welcome Friend!",
        trigger: "2"
      },
      {
        id: "2",
        message: "I'm Maxim! an AI chatbot that will help you selecting your collage major!",
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
        id: "9",
        options: [
          { value: 1, label: "Register Now!!", trigger: "10" },
          { value: 2, label: "Later", trigger: "11" }
        ]
      },    
      {
        id: "8",
        message: "Great! It's our pleasure to have you as a member of our family!",
        trigger: "11"
      },
      {
        id: "10",
        component: (
          <BotRedirect
            message="It's our pleasure to have you as a member of our family !"
            url="http://localhost:5000/"
          />
        ),
        trigger: "11"
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
      {
        id: "14",
        message: "1. What is your main intrest ?",
        trigger: "15"
      },  
      
      {id: "15",
      options: [ // could be in a friendly manner like : gaming, reading, writing... etc
        { value: 1, label: "Technology", trigger: "16" },
        { value: 2, label: "Human psychology", trigger: "16"},
        { value: 3, label: "Biology", trigger: "16"},
        { value: 4, label: "Medical", trigger: "16"},
        { value: 5, label: "Finance", trigger: "16"},
        { value: 6, label: "Art", trigger: "16"},
        { value: 7, label: "Design", trigger: "16"},
        { value: 8, label: "Math", trigger: "16"}
      ]  
    },
    {
      id: "16",
      message: "2. What is  .. ?",
      trigger: "17"
    },  
    {id: "17",
    options: [ 
      { value: 1, label: " ", trigger: "18" },
      { value: 2, label: " ", trigger: "18"},
      { value: 3, label: " ", trigger: "18"},
      { value: 4, label: " ", trigger: "18"},
      { value: 5, label: " ", trigger: "18"},
      { value: 6, label: " ", trigger: "18"},
      { value: 7, label: " ", trigger: "18"},
      { value: 8, label: " ", trigger: "18"}
    ]  
  },
  {
    id: "18",
    message: "4. What is  .. ?",
    trigger: "19"
  }, 
  {id: "19",
  options: [ 
    { value: 1, label: " ", trigger: "18" },
    { value: 2, label: " ", trigger: "18"},
    { value: 3, label: " ", trigger: "18"},
    { value: 4, label: " ", trigger: "18"},
    { value: 5, label: " ", trigger: "18"},
    { value: 6, label: " ", trigger: "18"},
    { value: 7, label: " ", trigger: "18"},
    { value: 8, label: " ", trigger: "18"}
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