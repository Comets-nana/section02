import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {

    const router = useRouter(); // Hook 호출
    const {q} = router.query;

    console.log(router); // console에 출력된 router객체 확인

    return <h1>Search Result for: {q}</h1>;
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
};