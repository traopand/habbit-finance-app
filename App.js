import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Component,
  ScrollView,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default function App() {
  // functions that let you add item:
  const [enteredSpending, setEnteredSpending] = useState(0);
  const [enteredIncome, setEnteredIncome] = useState(0);
  // const [spending, setSpending] = useState();
  const [totalAmount, setTotalAmount] = useState(64);

  const [enteredTaskOne, setEnteredTaskOne] = useState("Laundry");
  const [enteredTaskTwo, setEnteredTaskTwo] = useState("Doing the Dishes");
  const [enteredTaskThree, setEnteredTaskThree] = useState("Cleaning");

  function changeTaskOne() {
    setEnteredTaskOne();
  }

  function changeTaskTwo() {
    setEnteredTaskTwo();
  }

  function changeTaskThree() {
    setEnteredTaskThree();
  }

  function subtractFunds() {
    setTotalAmount(totalAmount - enteredSpending);
    setEnteredSpending(0);
  }

  function addLaundry() {
    setTotalAmount(totalAmount + 2);
    setEnteredSpending(0);
  }

  function addWalkingDog() {
    setTotalAmount(totalAmount + 1);
    setEnteredSpending(0);
  }

  function addDishes() {
    setTotalAmount(totalAmount + 0.5);
    setEnteredSpending(0);
  }

  function addFunds() {
    setTotalAmount(totalAmount + enteredIncome);
    setEnteredIncome(0);
  }

  //};

  // functions that let you add amount:

  const [enteredAmount, setEnteredAmount] = useState("");
  const [amount, setAmount] = useState([]);

  const amountInputHandler = (enteredText) => {
    setEnteredAmount(enteredText);
  };

  const addAmountHandler = () => {
    setAmount((currentAmount) => [...currentAmount, enteredAmount]);
  };

  const combineOutput = () => {
    addSpendingHandler;
    addAmountHandler;
  };

  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 0 }}>
        <Image style={styles.habbit} source={require("./habbit.png")} />

        <View style={styles.screen}>
          <View style={styles.horizontal}>
            <Image style={styles.dragon} source={require("./dragon.png")} />
            <View style={styles.startInfo}>
              <Text style={styles.userName}>Olivia</Text>
              <Text style={styles.Balance}>Balance: ${totalAmount}</Text>
              <Text style={styles.userInfo}>Next Payday: June 16</Text>
              <Text style={styles.userInfo}>+ $20.00</Text>
              <Text style={styles.userInfo}>Level: Hatchling</Text>
            </View>
          </View>

          <View style={styles.widgetTitle}>
            <Text style={styles.heading}>What is Personal Finance?</Text>
          </View>
          <View style={styles.widgetFinanceBody}>
            <Text style={styles.paragraph}>
              Think about the money you own. This includes the money in your
              piggy bank, wallet, birthday cards, or bank accounts. Personal
              finance is the way you earn, budget and save this money!{" "}
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modal1Visible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
                <View style={styles.newCenter}>
                  <View style={styles.modalEarningView}>
                    <Text style={styles.heading}>Earning {"\n"}</Text>
                    <Text style={styles.modalText}>
                      This is your ability to make money. Think about all of the
                      different ways that you earn money. Do you have an
                      allowance? A job? Do you receive money as a gift during
                      different celebrations? Take time to become aware and
                      write down all of the different ways that you bring in
                      money.
                    </Text>

                    <TouchableHighlight
                      style={{
                        ...styles.openButton,
                        backgroundColor: "#FFE694",
                      }}
                      onPress={() => {
                        setModal1Visible(!modal1Visible);
                      }}
                    >
                      <Text style={styles.closeStyle}>Close</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>

              <TouchableOpacity
                style={styles.buttonLeftImage}
                activeOpacity={0.5}
                onPress={() => {
                  setModal2Visible(true);
                }}
              >
                <Image
                  source={require("./saving.png")}
                  style={styles.buttonLeftImage}
                />
              </TouchableOpacity>
            </View>

            <View>
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modal3Visible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                  }}
                >
                  <View style={styles.newCenter}>
                    <View style={styles.modalBudgetView}>
                      <Text style={styles.heading}>Budgeting {"\n"}</Text>
                      <Text style={styles.modalText}>
                        Budgeting is the practice of creating a plan on how you
                        are going to spend your money. This allows you to
                        determine in advance whether you will have enough money
                        to do the things you need to do and how much money you
                        will have leftover to spend recreationally or save!
                      </Text>

                      <TouchableHighlight
                        style={{
                          ...styles.openButton,
                          backgroundColor: "#FFE694",
                        }}
                        onPress={() => {
                          setModal3Visible(!modal3Visible);
                        }}
                      >
                        <Text style={styles.closeStyle}>Close</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>

                <TouchableOpacity
                  style={styles.buttonBottomImage}
                  activeOpacity={0.5}
                  onPress={() => {
                    setModal3Visible(true);
                  }}
                >
                  <Image
                    source={require("./budgeting.png")}
                    style={styles.buttonBottomImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal2Visible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.newCenter}>
                <View style={styles.modalSpendingView}>
                  <Text style={styles.heading}>Spending {"\n"}</Text>
                  <Text style={styles.modalText}>
                    Sometimes it can feel tempting to spend money as soon as you
                    have it. However, putting some of your money away for future
                    use is very important. This is because sometimes you may
                    have a long-term item/goal you would like to achieve or you
                    may face an unexpected need for money in the future. You can
                    use the strategy of budgeting in order to create a goal for
                    how much money you will save each month.
                  </Text>

                  <TouchableHighlight
                    style={{
                      ...styles.openButton,
                      backgroundColor: "#FFE694",
                    }}
                    onPress={() => {
                      setModal2Visible(!modal2Visible);
                    }}
                  >
                    <Text style={styles.closeStyle}>Close</Text>
                  </TouchableHighlight>
                  <View></View>
                </View>
              </View>
            </Modal>

            <TouchableOpacity
              style={styles.buttonRightImage}
              activeOpacity={0.5}
              onPress={() => {
                setModal1Visible(true);
              }}
            >
              <Image
                source={require("./earning.png")}
                style={styles.buttonRightImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <View style={styles.widgetTitle}>
              <Text style={styles.heading}>Spending</Text>
            </View>
            <View style={styles.widgetBody}>
              <Text style={styles.paragraph}>
                Spend wisely. Should you be saving up for something instead?{" "}
              </Text>

              <View style={styles.horizontal}>
                <Text style={styles.bigText}>I'm spending </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(text) => {
                      console.log(text);
                      setEnteredSpending(parseFloat(text));
                    }}
                    value={enteredSpending.toString()}
                  />
                </View>
                <View style={styles.addButton}>
                  <Button title="ENTER" onPress={subtractFunds} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.center}>
            <View style={styles.widgetTitle}>
              <Text style={styles.heading}>Income</Text>
            </View>
            <View style={styles.widgetBody}>
              <Text style={styles.paragraph}>
                This is the fun part! Log any money you earn here.{" "}
              </Text>
              <View style={styles.horizontal}>
                <Text style={styles.bigText}>Today, I earned </Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={(text) => {
                    setEnteredIncome(parseInt(text));
                  }}
                  value={enteredIncome.toString()}
                />
                <Button title="ENTER" onPress={addFunds} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          <View style={styles.horizontal}>
            <View style={styles.widgetTitle}>
              <Text style={styles.heading}>Tasks</Text>
            </View>
          </View>
          <View style={styles.taskBox}>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modal4Visible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
                <View style={styles.newCenter}>
                  <View style={styles.modalTaskView}>
                    <Text style={styles.modalText}>
                      <Text style={styles.heading}>
                        Add Today's Tasks {"\n"}
                      </Text>
                      <Text style={styles.modalTaskText}>
                        {" "}
                        Task One: $2.00, Task Two: $1.00, Task Three: $0.50
                      </Text>
                    </Text>
                    <View style={styles.horizontal}>
                      <View>
                        <TextInput
                          placeholder="enter task 1"
                          style={styles.taskinput}
                          onChangeText={changeTaskOne}
                          value={enteredTaskOne}
                        />

                        <TextInput
                          placeholder="enter task 2"
                          style={styles.taskinput}
                          onChangeText={changeTaskTwo}
                          value={enteredTaskTwo}
                        />
                        <TextInput
                          placeholder="enter task 3"
                          style={styles.taskinput}
                        />
                      </View>

                      <View style={styles.taskButtons}>
                        <View style={styles.taskButton}>
                          <Button
                            title="ADD"
                            onPress={(text) => {
                              setEnteredTaskOne(text);
                            }}
                            value={enteredTaskOne}
                          />
                        </View>

                        <View style={styles.taskButton}>
                          <Button
                            title="ADD"
                            onPress={(text) => {
                              setEnteredTaskTwo(text);
                            }}
                            value={enteredTaskTwo}
                          />
                        </View>

                        <View style={styles.taskButton}>
                          <Button
                            title="ADD"
                            onPress={(text) => {
                              setEnteredTaskThree(text);
                            }}
                            value={enteredTaskThree}
                          />
                        </View>
                      </View>
                    </View>

                    <TouchableHighlight
                      style={{
                        ...styles.openButton,
                        backgroundColor: "#FFE694",
                      }}
                      onPress={() => {
                        setModal4Visible(!modal4Visible);
                      }}
                    >
                      <Text style={styles.closeStyle}>Close</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>

              <TouchableOpacity
                style={styles.buttonRightImage}
                activeOpacity={0.5}
                onPress={() => {
                  setModal4Visible(true);
                }}
              >
                <Image
                  source={require("./addTask.png")}
                  style={styles.buttonAddTask}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.bigChunk}>
              <Text style={styles.paragraph}>
                Check off any chores you completed today!{" "}
              </Text>
              <Text style={styles.today}>Today, I did:</Text>

              <View style={styles.horizontal}>
                <View>
                  <Text style={styles.tasks}>
                    {"\t"}
                    {"\u2022"} {enteredTaskOne}
                    {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} $2.00
                  </Text>
                  <Text style={styles.tasks}>
                    {"\t"}
                    {"\u2022"}
                    {enteredTaskTwo} {"\t"} {"\t"} {"\t"} $1.00
                  </Text>
                  <Text style={styles.tasks}>
                    {"\t"}
                    {"\u2022"}
                    {enteredTaskThree} {"\t"} {"\t"} {"\t"} {"\t"} {"\t"}$0.50
                  </Text>
                </View>
                <View style={styles.taskButtons}>
                  <View style={styles.taskButton}>
                    <Button title="ADD" onPress={addLaundry} />
                  </View>

                  <View style={styles.taskButton}>
                    <Button title="ADD" onPress={addWalkingDog} />
                  </View>

                  <View style={styles.taskButton}>
                    <Button title="ADD" onPress={addDishes} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a8edcb",
  },
  heading: {
    fontWeight: "600",
    fontSize: 25,
    textAlign: "center",
  },
  paragraph: {
    marginBottom: 20,
    fontSize: 16,
    color: "black",
    lineHeight: 30,
    marginHorizontal: 10,
    textAlign: "left",
  },
  bigText: {
    fontSize: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  habbit: {
    marginTop: 10,
    height: 100,
    width: 400,
    alignItems: "center",
  },
  dragon: {
    height: 175,
    width: 175,
    marginTop: 10,
  },
  buttomImage: {
    height: 60,
    width: 60,
    marginTop: 10,
  },
  horizontal: {
    flexDirection: "row",
  },
  userName: {
    fontSize: 25,
    fontWeight: "600",
  },
  Balance: {
    fontSize: 22,
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 18,
    fontWeight: "300",
  },
  startInfo: {
    flex: 1,
    padding: 20,
  },
  buttonLeftImage: {
    width: 200,
    height: 200,
  },
  buttonRightImage: {
    width: 200,
    height: 200,
    marginRight: 0,
  },
  buttonBottomImage: {
    width: 200,
    height: 200,
    marginLeft: 0,
  },
  widgetTitle: {
    height: 72,
    width: 380,
    marginTop: 20,
    marginBottom: 3,
    padding: 20,
    backgroundColor: "#FFE694",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 10,
  },
  widgetBody: {
    height: 150,
    width: 380,
    padding: 20,
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  today: {
    fontSize: 20,
    marginLeft: 30,
    marginBottom: 20,
  },
  buttonAddTask: {
    height: 400,
    width: 400,
    marginHorizontal: 60,
    marginVertical: -35,
    alignItems: "center",
  },
  widgetFinanceBody: {
    height: 220,
    width: 380,
    padding: 20,
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  screen: {
    padding: 10,
  },
  title: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 115,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 20,
  },
  taskinput: {
    width: 115,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 11,
  },
  tasks: {
    fontSize: 16,
    fontWeight: "300",
    marginTop: 10,
    marginBottom: 7,
  },
  taskBox: {
    height: 260,
    width: 393,
    padding: 20,
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: "center",
  },
  taskButton: {
    fontSize: 13,
    fontWeight: "300",
    marginHorizontal: 10,
  },
  bigChunk: {
    marginHorizontal: 10,
    marginVertical: -210,
  },
  centeredView: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  center: {
    alignItems: "center",
  },
  addTaskButton: {
    flex: 1,
    backgroundColor: "#C3E6FF",
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  newCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalBudgetView: {
    margin: 20,
    backgroundColor: "#E0BBE4",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalEarningView: {
    margin: 20,
    backgroundColor: "#C3E6FF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalSpendingView: {
    margin: 20,
    backgroundColor: "#FFC7C7",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTaskView: {
    margin: 20,
    backgroundColor: "#FFC7C7",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#FFE694",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 30,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },

  closeStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  modalText: {
    marginBottom: 15,
    fontSize: 20,
    lineHeight: 30,
  },
});

/*
var username = prompt("What is your name?");
 var name = window.prompt("type message for user"); 
 will prompt the user to give us specific information
 document.write("Hey" + name + ", How are you today");
*/
