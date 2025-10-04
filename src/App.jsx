
import { ReactUseEffect } from "./components/hooks/UseEffect";
import { CleanUp } from "./components/hooks/UseEffect/CleanUp";
import { Challenge } from "./components/hooks/UseEffect/EffectChallenge";
import { HowNotToFetchApi } from "./components/hooks/UseEffect/HowNotToFetchApi";
import { UseId } from "./components/hooks/UseID";
import { UseRef } from "./components/hooks/useRefs";
import { ForwardRefs } from "./components/hooks/useRefs/ForwardRef";
import { Counter } from "./components/hooks/useState";
import CounterChallenge from "./components/hooks/useState/Challenge";
import { ContactForm } from "./components/hooks/useState/ContactForm";
import { LoginForm } from "./components/hooks/useState/LoginForm";
import { RegistrationForm } from "./components/hooks/useState/Registration";
import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";
import { ParentComponent } from "./components/PropDrilling";




 export const App=()=> {
  return <ParentComponent/>;
 };
 
 export default App;
 