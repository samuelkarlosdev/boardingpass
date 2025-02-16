import { 
  useFonts, 
  Poppins_700Bold, 
  Poppins_500Medium, 
  Poppins_400Regular, 
  Poppins_800ExtraBold 
} from "@expo-google-fonts/poppins";

import { Home } from "@/app/home";
import { StatusBar } from "expo-status-bar"

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_700Bold, 
    Poppins_500Medium, 
    Poppins_400Regular, 
    Poppins_800ExtraBold,
  })

  if(!fontLoaded){
    return null
  }

  return (
    <>
    <StatusBar style="light" backgroundColor="transparent" translucent/>
      <Home />
    </>
    
  );
}

