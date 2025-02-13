import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({ children }: {
    children: ReactNode;
}) {
    const router = useRouter();
    const [search, setSearch] = useState("");

    // 새로고침 시 검색어 유지
    const q = router.query.q as string;

    useEffect(() => {
        setSearch(q || "");
    }, [q]);

    // 입력값을 서치State에 저장
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        if (!search || q === search) return;
        router.push(`/search?q=${search}`);
    };

    // Enter키를 눌러서 검색되는 기능
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div>
            <div className={style.searchbar_container}>
                <input 
                    value={search} 
                    onKeyDown={onKeyDown}
                    onChange={onChangeSearch} 
                    placeholder="검색어를 입력하세요 ..." 
                />
                <button onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>
    );
}