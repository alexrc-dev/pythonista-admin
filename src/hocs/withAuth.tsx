import {useRouter} from "next/router";
import {useEffect, useState, Fragment} from "react";
import {tokenValid} from "../services/auth.service";
import {getToken, removeToken} from "../services/credentials.service";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    useEffect(() => {
      (async () => {
        const token = getToken();
        if (!token)
          await Router.replace('/')
        else {
          const v = await tokenValid();
          if (v)
            setVerified(v)
          else {
            removeToken();
            await Router.replace("/");
          }
        }
      })();
    }, []);
    if (verified) {
      return <WrappedComponent {...props}/>
    } else return <Fragment>Redirecting...</Fragment>;
  }
}

export default withAuth;
