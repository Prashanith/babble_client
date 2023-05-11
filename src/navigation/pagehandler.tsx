import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface IPageProps {
  child: JSX.Element;
  isProtected?: boolean;
}

function PageHandler({ child, isProtected = false }: IPageProps): JSX.Element {
  const auth = useAuth();
  const navigator = useNavigate();

  useEffect(() => {
    if (isProtected) {
      if (!auth.state.isAuthenticated) {
        navigator("/login", { replace: true });
      }
    }
  }, []);

  if (isProtected) {
    if (auth.state.isAuthenticated) return child;
    else return <div>Authentication Failed</div>;
  } else {
    return child;
  }
}

export default PageHandler;
