import Link from "next/link";
import { useRouter } from "next/router";

export default function Comments() {
    const router = useRouter()
    const todoId = router.query.todoId
    const commentsId = router.query.commentsId

    return(
        <>
        <Link href={`/todos/${todoId}`}><a>Voltar</a></Link>
        <h1> Exibindo Comentário número: {commentsId}  do Todo {todoId}</h1>
        </>
    )

}