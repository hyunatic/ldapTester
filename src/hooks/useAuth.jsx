import { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState(null);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    const keycloak = new Keycloak({
      url: "http://localhost:4000",
      realm: "myRealm",
      clientId: "reactApp",
    });
    keycloak.init({ onLoad: "login-required" }).then((res) => setLogin(res));
  }, []);
  
  return isLogin;
};

export default useAuth;
