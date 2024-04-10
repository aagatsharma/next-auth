import CardWrapper from "./card-wrapper";
import { TriangleAlert } from "lucide-react";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full flex items-center justify-center ">
        <TriangleAlert className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
