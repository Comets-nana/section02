import { useRouter } from "next/router";

export default function Pages() {
    const router = useRouter();
    const {id} = router.query;

    console.log(id);

    // 그냥 메모하는 거
    // [id] = /book/20 (id 한 개만 가능)
    // [...id] = /book/20/468/59 (id 여러 개 가능)
    // [[...id]] = /book | /book/20 | /book/20/468/59 (전부 가능)

    return <h1>Book {id}</h1>;
}