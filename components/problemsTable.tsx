import Link from "next/link";
import {problems} from './mockProblems/mockProblems'
import Image from 'next/image';

type ProblemsTableProps = {
	
};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
	
	return (
		<>
			<tbody className='gradiant text-dark '>
				{problems.map((problem, idx) => {
					const difficulyColor =
						problem.difficulty === "Easy"
							? "text-dark-green-s"
							: problem.difficulty === "Medium"
							? "text-dark-yellow"
							: "text-dark-pink";
					return (
						<tr className= "gradiant items-center" key={problem.id}>
							<td className={"px-6 py-4"}>{idx+1}</td>
							<td className='px-6 py-4'>
							
									<Link
										className='hover:text-blue-600 cursor-pointer'
										href={`/problems/${problem.id}`}
									>
										{problem.title}
									</Link>
								
							</td>
							<td className={`px-6 py-4 ${difficulyColor}`}>{problem.difficulty}</td>
							<td className={"px-6 py-4"}>{problem.category}</td>
                            <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
							</th>
							<td className={"px-6 py-4"}>
							<a href="/">
                                <Image
                                src="/assets/images/solution.png" 
                                alt="logo"
                                width={45}
                                height={45}
                                className="object-contain"
                                />
                            </a>
								
							</td>
						</tr>
					);
				})}
			</tbody>
			
		</>
	);
};
export default ProblemsTable;
