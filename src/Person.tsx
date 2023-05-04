// import { useEffect, useState } from "react";

export default function Person(props: { name: string; height: string }) {
  let { name, height } = props;
  //   const [loading, setLoading] = useState(false);

  return (
    <div>
      <p>{name}</p>
      {/* {loading && <div className="loading" />} */}
    </div>
  );
}
