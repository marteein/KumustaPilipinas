import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, NativeModules } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';
import { SliderBox } from "react-native-image-slider-box";


//import Sound from 'react-native-sound';

//const sarap = new Sound('./ang_sarap.mp3', Sound.MAIN_BUNDLE);
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="menu" size={28} onPress={navigation.openDrawer} />
      </View>
      <View style={styles.bodyHome1}>
        <Image resizeMode='center' source={require('./assets/pictures/title/kumusta1.png')}>
        </Image>
      </View>
      <View style={styles.bodyHome}>
        {/* ButtonLesson */}
        <TouchableOpacity style={styles.img} onPress={() => navigation.navigate('Lessons')} >
          <Image source={require('./assets/pictures/Buttons/lesson1.png')}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.img} onPress={() => navigation.navigate('Assessment')} >
          <Image source={require('./assets/pictures/Buttons/assess1.png')}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.img} onPress={() => navigation.navigate('Help')} >
          <Image source={require('./assets/pictures/Buttons/help1.png')}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.img} onPress={() => navigation.navigate('About')} >
          <Image source={require('./assets/pictures/Buttons/about1.png')}>
          </Image>
        </TouchableOpacity>
      </View>
    </View >
  );
}

//Lessons Page
function LessonsTagalog({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.bgColor2}>
        <Text style={styles.textStyle1}>Lessons</Text>
      </View>
      <View style={styles.bodyHome}>
        {/* Button11 */}
        <TouchableOpacity style={styles.img} onPress={() => navigation.navigate('    Restaurant')} >
          <Image source={require('./assets/pictures/Buttons/button1.png')}>

          </Image>
        </TouchableOpacity>
        {/* Button2 */}
        <TouchableOpacity style={styles.img} onPress={() => navigation.navigate('    Travel')} >
          <Image source={require('./assets/pictures/Buttons/button2.png')}>
          </Image>
        </TouchableOpacity>
        {/* Button3 */}
        <TouchableOpacity style={styles.img} onPress={() => navigation.navigate('    Greetings')} >
          <Image source={require('./assets/pictures/Buttons/button3.png')}>
          </Image>
        </TouchableOpacity>
        {/* Button4 */}
        <TouchableOpacity style={styles.img} onPress={() => navigation.navigate('    Hotel')} >
          <Image source={require('./assets/pictures/Buttons/button4.png')}>
          </Image>
        </TouchableOpacity>
        {/* Button5 */}
        <TouchableOpacity style={styles.img} onPress={() => navigation.navigate('    Market')} >
          <Image source={require('./assets/pictures/Buttons/button5.png')}>
          </Image>
        </TouchableOpacity>

      </View>
    </View>
  );
}

//Restaurant Page
function Restaurant({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.bgColor2}>
        <Image source={require('./assets/pictures/Buttons/button1.png')}></Image>
      </View>
      <ScrollView contentContainerStyle={styles.bodyHome}>
        {/* Sentence1 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Magkano po sa...?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>How much for the...?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence2 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Kainan na!</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Let's eat!</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence3 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Ano ang masarap dito?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Which is delicious here?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence4 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Ang Sarap!</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Delicious!</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence5 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Ano ang mga panghimagas nyo?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>What are your desserts?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence6 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Pahingi po ng tubig</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Can I have some water</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence7 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Masarap ba ang...?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Is ... Delicious?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence8 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Ano po ang mga ulam nyo?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>What are your dishes?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence9 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>May sabaw po ba kayo?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Do you have soup?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence10 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Isa pa pong kanin</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Can I have another rice?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

//Travel Page
function Travel({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.bgColor2}>
        <Image source={require('./assets/pictures/Buttons/button2.png')}></Image>
      </View>
      <ScrollView contentContainerStyle={styles.bodyHome}>
        {/* Sentence1 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Magkano po hanggang sa...?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>How much is it until...?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence2 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Makikiabot ng bayad</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Can you please pass my fare?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence3 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Saan po ang sakayan papuntang...?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Where can I get a ride going to...?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence4 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Saan po ang...?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Where is the...?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence5 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Doon lang po sa may...</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Just over there at...</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence6 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Pababa nalang po sa may...</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Just drop me by the...</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence7 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Saan may malapit na kainan dito?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Where's the nearest restaurant?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence8 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Saan may malapit na CR dito?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Where's the nearest Restroom?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence9 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Saan may malapit na Mall dito?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Where's the nearest Mall?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence10 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Saan may malapit na park dito?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Where is the nearest park?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

//Greetings Page
function Greetings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.bgColor2}>
        <Image source={require('./assets/pictures/Buttons/button3.png')}></Image>
      </View>
      <ScrollView contentContainerStyle={styles.bodyHome}>
        {/* Sentence1 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Magandang umaga po</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Good Morning</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence2 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Magandang hapon po</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Good Afternoon</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence3 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Magandang gabi po</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Good Evening</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence4 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Kumusta/Kumusta ka?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Hi/How are you?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence5 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Mabuti</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>I'm fine</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence6 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Salamat po</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Thank you</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence7 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Walang anuman</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>You're welcome</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence8 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Ang pangalan ko ay...</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>My name is...</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence9 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Anong pangalan mo?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>What is your name?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence10 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Paalam</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Goodbye</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

//Hotel Page
function Hotel({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.bgColor2}>
        <Image source={require('./assets/pictures/Buttons/button4.png')}></Image>
      </View>
      <ScrollView contentContainerStyle={styles.bodyHome}>
        {/* Sentence1 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Magkano mag-rent ng isang kwarto?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>How much is it to rent a room?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence2 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>May aircon ba dito?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Do you have air-conditioning available</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence3 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Pang ilanang tao itong kwarto?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>How many people can occupy this room?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence4 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Meron bang almusal, tanghalian at hapunan?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Do you serve breakfast, lunch and dinner?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence5 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Magkano po kada araw?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>How much per day?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence6 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Ilang bathrooms and meron?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>How many bathrooms available?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence7 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Pwede bang magpasok ng alaga?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Can I bring my pet inside?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence8 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Pwedeng magpapalit ng kumot?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Can I ask for a new blanket?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence9 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Pwedeng magpapalit ng bedsheet?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Can I ask for a new bedsheet?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence10 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Pwedeng magpapalit ng punda?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Can I ask for a new pillow case?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

//Market Page
function Market({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.bgColor2}>
        <Image source={require('./assets/pictures/Buttons/button5.png')}></Image>
      </View>
      <ScrollView contentContainerStyle={styles.bodyHome}>
        {/* Sentence1 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Magkano po ito?</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>How much is this?</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence2 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Ang mahal naman</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>It's too expensive</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence3 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Pahingi naman ng tawad</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Please lower the price</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence4 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Gusto ko nito</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>I want this</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence5 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Mas gusto ko yan</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>I want that better</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence6 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>sa inyo nalang po ang sukli</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>You can keep the change</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence7 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Kulang po ang sukli</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>You haven't given me enough change</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence8 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Sobra po ang sukli</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>You've given me too much change</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence9 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Mas malaki</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Bigger</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
        {/* Sentence10 */}
        <View style={styles.cardStyle}>
          <Text style={styles.tagalogText}>Mas maliit</Text>
        </View>
        <View style={styles.cardStyle2}>
          <Text style={styles.EnglishText}>Smaller</Text>
        </View>
        <View style={styles.cardStyle3}>
          <TouchableOpacity style={styles.buttonPlay}><MaterialIcons name="play-arrow" size={25}></MaterialIcons></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPause}><MaterialIcons name="pause" size={25}></MaterialIcons></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

//Assessment Page
function Assessment({ navigation }) {
  var score = 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.bgColor2}>
        <Text style={styles.textStyle1}>Assessment</Text>
      </View>
      <View style={styles.bodyHome}>
        <Text>Score: {score}{'\n\n\n\n'}</Text>
        <Text style={styles.tagalogText}>How much for the...?{'\n\n\n'}</Text>

      </View>
    </View>
  );
}

//Help Page
function Help({ navigation }) {
  var Helper = require('./helpSlider');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.bgColor2}>
        <Text style={styles.textStyle1}>Help</Text>
      </View>
      <View style={styles.bodyHome}>
        <Helper />
      </View>
    </View>
  );
}

//About Page
function About({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.bgColor2}>
        <Text style={styles.textStyle1}>About</Text>
      </View>
      <View style={styles.bodyHome}>
        <Text style={styles.EnglishText}>{'\n\n\n\n'}Made by:{'\n\n\n\n'}</Text>
        <Text style={styles.tagalogText}>LOPEZ, James Daniel</Text>
        <Text style={styles.tagalogText}>YAMBALIA, Florian Marteein</Text>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Lessons" component={LessonsTagalog} />
        <Drawer.Screen name="Assessment" component={Assessment} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="----------------Lessons----------------" component={HomeScreen} />
        <Drawer.Screen name="    Restaurant" component={Restaurant} />
        <Drawer.Screen name="    Travel" component={Travel} />
        <Drawer.Screen name="    Greetings" component={Greetings} />
        <Drawer.Screen name="    Hotel" component={Hotel} />
        <Drawer.Screen name="    Market" component={Market} />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5ED0BD",
    height: "100%",
  },

  header: {
    backgroundColor: "#00A287",
    padding: 20,
    marginTop: 25,
    height: "7%",
    zIndex: 3
  },

  bodyHome: {
    padding: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  bodyHome1: {
    padding: 10,
    marginVertical: -140,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle1: {
    fontSize: 25,
    fontFamily: "sans-serif",
    justifyContent: "center",
    alignItems: "center",
  },

  tagalogText: {
    fontWeight: 'bold',
    fontSize: 17
  },

  EnglishText: {
    fontStyle: 'italic',
    fontSize: 14
  },

  cardStyle: {
    padding: 10,
    backgroundColor: '#F1F1F1',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    width: '90%',
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,

  },
  cardStyle2: {
    padding: 10,
    backgroundColor: '#F1F1F1',
    width: '90%',
    borderTopWidth: 2,
    borderTopColor: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,

  },
  cardStyle3: {
    padding: 10,
    backgroundColor: '#F1F1F1',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    width: '90%',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
    marginBottom: 30
  },

  buttonPlay: {
    marginRight: 10
  },

  buttonPause: {
    marginLeft: 10
  },

  bgColor2: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#34D0B6'
  },

  img: {
    position: 'relative',
    margin: 15
  }
});
