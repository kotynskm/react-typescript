// we declare the string messages that are acceptable for status, because otherwise any string could be passed in and would not
// result in an error, therefore it cannot be just status:string
type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error";
  }

  return (
    <div>
      <h2>Status : {message}</h2>
    </div>
  );
};
