
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the employee interface
export interface Employee {
    id: number;
    name: string;
    jobTitle: string;
    department: string;
    image: string;
    initial: string;
    branch: string;
    email: string;
    extension?: string;
}

export const employeesData = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [employees, setEmployees] = useState<Employee[]>([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get<Employee[]>('http://localhost:5045/api/WeatherForecast/employees') // replace with your endpoint
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error("Error fetching employee data:", error);
            });
    }, [])
};
//useEffect(() => {
//    fetch('/api/GetWeatherForecast/employees')
//        .then(response => {
//            if (!response.ok) {
//                throw new Error(`HTTP error! Status: ${response.status}`);
//            }
//            return response.json();
//        })
//        .then((data: Employee[]) => {
//            setEmployees(data);
//        })
//        .catch(error => {
//            console.error("Error fetching employee data:", error);
//        });
//}, []);



//export const employeesData = () => {
//    const [employees, setEmployees] = useState([]);

//    useEffect(() => {
//        axios.get('https://http://localhost:49418/api/GetWeatherForecast/employees') // Use your real endpoint
//            .then(response => {
//                setEmployees(response.data);
//            })
//            .catch(error => {
//                console.error("Error fetching employee data:", error);
//            });
//    }, []);


// Sample employee data
//export const employeesData: Employee[] = [
//  {
//    id: 1,
//    name: "Sarah Johnson",
//    position: "Chief Executive Officer",
//    department: "Executive",
//    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "sarah.johnson@acmeinc.com",
//    extension: "1001"
//  },
//  {
//    id: 2,
//    name: "Michael Chen",
//    position: "Chief Technology Officer",
//    department: "Executive",
//    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "michael.chen@acmeinc.com",
//    extension: "1002"
//  },
//  {
//    id: 3,
//    name: "Amanda Rodriguez",
//    position: "Chief Marketing Officer",
//    department: "Executive",
//    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "amanda.rodriguez@acmeinc.com",
//    extension: "1003"
//  },
//  {
//    id: 4,
//    name: "David Wilson",
//    position: "Chief Financial Officer",
//    department: "Executive",
//    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "david.wilson@acmeinc.com",
//    extension: "1004"
//  },
//  {
//    id: 5,
//    name: "Lisa Thompson",
//    position: "HR Director",
//    department: "Human Resources",
//    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "lisa.thompson@acmeinc.com",
//    extension: "2001"
//  },
//  {
//    id: 6,
//    name: "Robert Harris",
//    position: "Operations Manager",
//    department: "Operations",
//    imageUrl: "https://images.unsplash.com/photo-1500648767791-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "robert.harris@acmeinc.com",
//    extension: "2002"
//  },
//  {
//    id: 7,
//    name: "Jennifer Lee",
//    position: "Product Manager",
//    department: "Product",
//    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "jennifer.lee@acmeinc.com",
//    extension: "3001"
//  },
//  {
//    id: 8,
//    name: "James Taylor",
//    position: "Sales Director",
//    department: "Sales",
//    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "james.taylor@acmeinc.com",
//    extension: "4001"
//  }
//];


//// Define the employee interface
//export interface Employee {
//  id: number;
//  name: string;
//  position: string;
//  department: string;
//  branch?: string;
//  initial?: string;
//  imageUrl: string;
//  email: string;
//  extension?: string;
//}

//// Sample employee data
//export const employeesData: Employee[] = [
//  {
//    id: 1,
//    name: "Sarah Johnson",
//    position: "Chief Executive Officer",
//    department: "Executive",
//    branch: "Headquarters",
//    initial: "SJ",
//    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "sarah.johnson@acmeinc.com",
//    extension: "1001"
//  },
//  {
//    id: 2,
//    name: "Michael Chen",
//    position: "Chief Technology Officer",
//    department: "Executive",
//    branch: "Headquarters",
//    initial: "MC",
//    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "michael.chen@acmeinc.com",
//    extension: "1002"
//  },
//  {
//    id: 3,
//    name: "Amanda Rodriguez",
//    position: "Chief Marketing Officer",
//    department: "Executive",
//    branch: "Headquarters",
//    initial: "AR",
//    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "amanda.rodriguez@acmeinc.com",
//    extension: "1003"
//  },
//  {
//    id: 4,
//    name: "David Wilson",
//    position: "Chief Financial Officer",
//    department: "Executive",
//    branch: "Headquarters",
//    initial: "DW",
//    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "david.wilson@acmeinc.com",
//    extension: "1004"
//  },
//  {
//    id: 5,
//    name: "Lisa Thompson",
//    position: "HR Director",
//    department: "Human Resources",
//    branch: "North Branch",
//    initial: "LT",
//    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "lisa.thompson@acmeinc.com",
//    extension: "2001"
//  },
//  {
//    id: 6,
//    name: "Robert Harris",
//    position: "Operations Manager",
//    department: "Operations",
//    branch: "East Branch",
//    initial: "RH",
//    imageUrl: "https://images.unsplash.com/photo-1500648767791-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "robert.harris@acmeinc.com",
//    extension: "2002"
//  },
//  {
//    id: 7,
//    name: "Jennifer Lee",
//    position: "Product Manager",
//    department: "Product",
//    branch: "West Branch",
//    initial: "JL",
//    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "jennifer.lee@acmeinc.com",
//    extension: "3001"
//  },
//  {
//    id: 8,
//    name: "James Taylor",
//    position: "Sales Director",
//    department: "Sales",
//    branch: "South Branch",
//    initial: "JT",
//    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//    email: "james.taylor@acmeinc.com",
//    extension: "4001"
//  }
//];
