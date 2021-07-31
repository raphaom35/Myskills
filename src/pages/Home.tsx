import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  Keyboard,
  FlatList,
} from "react-native";
import {Button} from "../components/Button";
import { SkillCard } from "../components/SkillCard";

// import { Container } from './styles';

interface  SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [MySkill, setMySkill] = useState<SkillData[]>([]);
  const [greeting, setGreetings] = useState("");

  function handleAddNewSkill() {
    const data={
      id:String(new Date().getTime()),
      name:newSkill
    }
    setMySkill([...MySkill, data]);
    Keyboard.dismiss()
    console.log(newSkill)
  }

  function handleRemoveSkill(id:string){
    setMySkill(oldState=>oldState.filter(
      skill=>skill.id!==id
    ));
  }

  useEffect(()=>{
    const currentHour = new Date().getHours();
    if(currentHour<12){
      setGreetings('Good morning')
    }else if(currentHour>=12 && currentHour<18){
      setGreetings('Good afternoon')
    }else{
      setGreetings('Good night')
    }
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{greeting}, Raphael</Text>
      
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button 
        title="Add"
        onPress={handleAddNewSkill}

      />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skylls</Text>
      
      <FlatList
        data={MySkill}
        keyExtractor={item => item.id}
        renderItem={({item})=>
          <SkillCard  
          skill={item.name}
          onPress={()=>handleRemoveSkill(item.id)}
          />
        }
      />
      
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS == "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings:{
    color: "#fff",

  },
});
