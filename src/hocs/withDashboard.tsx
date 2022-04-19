import {useRouter} from "next/router";
import {Fragment, useEffect, useState} from "react";
import {tokenValid} from "../services/auth.service";
import {getToken} from "../services/credentials.service";

const withDashboard = (WrappedComponent: any) => {

  return (props: any) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    useEffect(() => {
      (async () => {
        const token = getToken()
        if (Boolean(token)) {
          const v = await tokenValid();
          if (!v)
            setVerified(v)
          else {
            await Router.replace("/dashboard");
          }
        }
      })()
    }, []);
    if (!verified)
      return <WrappedComponent {...props}/>
    else return <Fragment>Redirecting...</Fragment>;
  }

}

export default withDashboard;
