import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <h1>Student Information</h1>
            <p>Leslie Evangelista</p>
            <p> CPRG 306 A</p>
            <Link href="https://github.com/Leslie-Evangelista/cprg306-assignments"> My GitHub Repository</Link>
        </div>
    );
}
