import { useRouter } from "next/router";

export default function Pages() {

    const router = useRouter(); // Hook 호출
    const {q} = router.query;

    console.log(router); // console에 출력된 router객체 확인

    return <h1>Search Result for: {q}</h1>;
}