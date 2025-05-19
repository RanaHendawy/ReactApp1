

import { useEffect, useRef } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Mail, Phone, X } from "lucide-react";
import { Employee } from "@/data/employeesData";
import EmployeeCard from "./EmployeeCard";

interface EmployeeModalProps {
    employee: Employee | null;
    isOpen: boolean;
    onClose: () => void;
      onPrevious?: () => void;
      onNext?: () => void;
      hasPrevious?: boolean;
      hasNext?: boolean;
}
  
const EmployeeModal = ({ employee, isOpen, onClose, onPrevious, onNext, hasPrevious = true, hasNext = true }: EmployeeModalProps) => {
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    // Set focus on the modal when it opens
    useEffect(() => {
        if (isOpen && closeButtonRef.current) {
            setTimeout(() => {
                closeButtonRef.current?.focus();
            }, 50);
        }
    }, [isOpen]);

    if (!employee) return null;


    const handleEmailClick = () => {
        window.location.href = `mailto:${employee.email}?subject=Message from Digital Delivery Portal`;
    };

    const handleExtensionClick = () => {
        window.location.href = `tel:${employee.extension}`;
    };


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-card text-card-foreground">
                <DialogHeader>
                    <DialogTitle className="text-xl">Employee Details</DialogTitle>
                </DialogHeader>



                {/* Previous button - positioned left */}
                {onPrevious && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={hasPrevious ? onPrevious : undefined}
                        disabled={!hasPrevious}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-primary/10 z-10"
                    >
                        <ChevronLeft className="h-5 w-5" />
                        <span className="sr-only">Previous employee</span>
                    </Button>
                )}

                {/* Next button - positioned right */}
                {onNext && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={hasNext ? onNext : undefined}
                        disabled={!hasNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-primary/10 z-10"
                    >
                        <ChevronRight className="h-5 w-5" />
                        <span className="sr-only">Next employee</span>
                    </Button>
                )}

                {/* Close button in top-right only */}
                {/*<Button*/}
                {/*    variant="ghost"*/}
                {/*    size="icon"*/}
                {/*    onClick={onClose}*/}
                {/*    className="absolute right-2 top-2 hover:bg-primary/10 z-10"*/}
                {/*>*/}
                {/*    */}{/*<X className="h-4 w-4" />*/}
                {/*    <span className="sr-only">Close</span>*/}
                {/*</Button>*/}


                <div className="flex flex-col items-center py-4">
                            <Avatar className="h-32 w-32 mb-4">
                              <AvatarImage src={employee.image} alt={employee.name} />
                            {/*  <AvatarFallback>{employee.initial || employee.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>*/}
                              </Avatar>

                    <h2 className="text-2xl font-bold mb-1">{employee.name}</h2>
                    <p className="text-primary text-lg mb-1">{employee.image}</p>

                    <div className="w-full max-w-xs mt-4">
                        {employee.email && (
                            <div className="grid grid-cols-3 gap-2 mb-2">
                                <span className="text-muted-foreground font-medium">Branch:</span>
                                <span className="col-span-2">{employee.email}</span>
                            </div>
                        )}

                    <div className="w-full max-w-xs mt-4">
                        <div className="grid grid-cols-3 gap-2 mb-2">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">Department:</span>
                            <span className="text-gray-900 dark:text-gray-50 col-span-2">{employee.department}</span>
                        </div>

                            <div className="grid grid-cols-3 gap-2 mb-2">
                                             <span className="text-muted-foreground font-medium">Email:</span>
                                             <button 
                                               className="col-span-2 break-all text-left flex items-center hover:text-primary"
                                               onClick={handleEmailClick}
                                              
                                                              >
                                                <Mail className="w-4 h-4 mr-1" />
                                               {employee.email}
                                              </button>
                                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-2">
                                             <span className="text-muted-foreground font-medium">Extension:</span>
                                             <button 
                                                className="col-span-2 flex items-center hover:text-primary"
                                              onClick={handleExtensionClick}
                                                
                                             >
                                               <Phone className="w-4 h-4 mr-1" />
                                               {employee.extension || 'N/A'}
                                             </button>
                                            </div>
                    </div>
                </div>


                {/*<div className="flex justify-end">*/}
                {/*    <DialogClose asChild>*/}
                {/*        <Button*/}
                {/*            ref={closeButtonRef}*/}
                {/*            variant="outline"*/}
                {/*            className="mt-2"*/}
                {/*        >*/}
                {/*            Close*/}
                {/*        </Button>*/}
                {/*    </DialogClose>*/}
                {/*    </div>*/}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EmployeeModal;




//import { useEffect, useRef, useState } from "react";
//import { 
//  Dialog,
//  DialogContent,
//  DialogHeader,
//  DialogTitle,
//} from "@/components/ui/dialog";
//import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
//import { Button } from "@/components/ui/button";
//import { Phone, Mail, ChevronLeft, ChevronRight, X } from "lucide-react";
//import { Employee } from "@/data/employeesData";
//import Draggable from 'react-draggable';

//interface EmployeeModalProps {
//  employee: Employee | null;
//  isOpen: boolean;
//  onClose: () => void;
//  onPrevious?: () => void;
//  onNext?: () => void;
//  hasPrevious?: boolean;
//  hasNext?: boolean;
//}

//const EmployeeModal = ({ 
//  employee, 
//  isOpen, 
//  onClose, 
//  onPrevious, 
//  onNext,
//  hasPrevious = true,
//  hasNext = true
//}: EmployeeModalProps) => {
//  const modalRef = useRef<HTMLDivElement>(null);
//  const [position, setPosition] = useState({ x: 0, y: 0 });
//  const [isDragging, setIsDragging] = useState(false);

//  // Reset position when modal opens or changes employee
//  useEffect(() => {
//    if (isOpen) {
//      setPosition({ x: 0, y: 0 });
//    }
//  }, [isOpen, employee]);

//  if (!employee) return null;

//  const handleEmailClick = () => {
//    window.location.href = `mailto:${employee.email}?subject=Message from Digital Delivery Portal`;
//  };

//  const handleExtensionClick = () => {
//    window.location.href = `tel:${employee.extension}`;
//  };

//  const handleDragStart = () => {
//    setIsDragging(true);
//  };

//  const handleDragStop = () => {
//    // Small delay to prevent interpreting a drag as a click
//    setTimeout(() => {
//      setIsDragging(false);
//    }, 100);
//  };

//  return (
//    <Dialog open={isOpen} onOpenChange={onClose} modal={false}>
//      <Draggable
//        nodeRef={modalRef}
//        handle=".drag-handle"
//        position={position}
//        onStart={handleDragStart}
//        onStop={handleDragStop}
//        bounds="body"
//        onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}
//      >
//        <DialogContent 
//          ref={modalRef}
//          className="sm:max-w-md bg-card text-card-foreground relative p-0 overflow-hidden border-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//          onPointerDownCapture={(e) => {
//            // Prevent dragging when clicking on buttons
//            if ((e.target as HTMLElement).closest('button')) {
//              e.stopPropagation();
//            }
//          }}
//        >
//          {/* Previous button - positioned left */}
//          {onPrevious && (
//            <Button 
//              variant="ghost" 
//              size="icon"
//              onClick={hasPrevious ? onPrevious : undefined}
//              disabled={!hasPrevious}
//              className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-primary/10 z-10"
//            >
//              <ChevronLeft className="h-5 w-5" />
//              <span className="sr-only">Previous employee</span>
//            </Button>
//          )}

//          {/* Next button - positioned right */}
//          {onNext && (
//            <Button 
//              variant="ghost" 
//              size="icon"
//              onClick={hasNext ? onNext : undefined}
//              disabled={!hasNext}
//              className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-primary/10 z-10"
//            >
//              <ChevronRight className="h-5 w-5" />
//              <span className="sr-only">Next employee</span>
//            </Button>
//          )}

//          {/* Close button in top-right only */}
//          <Button 
//            variant="ghost" 
//            size="icon" 
//            onClick={onClose} 
//            className="absolute right-2 top-2 hover:bg-primary/10 z-10"
//          >
//            <X className="h-4 w-4" />
//            <span className="sr-only">Close</span>
//          </Button>

//          <div className="p-6 drag-handle cursor-move">
//            <DialogHeader>
//              <DialogTitle className="text-xl text-center drag-handle">Employee Details</DialogTitle>
//            </DialogHeader>

//            <div className="flex flex-col items-center py-4">
//              <Avatar className="h-32 w-32 mb-4">
//                <AvatarImage src={employee.imageUrl} alt={employee.name} />
//                <AvatarFallback>{employee.initial || employee.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
//              </Avatar>

//              <h2 className="text-2xl font-bold mb-1">{employee.name}</h2>
//              <p className="text-primary text-lg mb-1">{employee.position}</p>

//              <div className="w-full max-w-xs mt-4">
//                {employee.branch && (
//                  <div className="grid grid-cols-3 gap-2 mb-2">
//                    <span className="text-muted-foreground font-medium">Branch:</span>
//                    <span className="col-span-2">{employee.branch}</span>
//                  </div>
//                )}

//                <div className="grid grid-cols-3 gap-2 mb-2">
//                  <span className="text-muted-foreground font-medium">Department:</span>
//                  <span className="col-span-2">{employee.department}</span>
//                </div>

//                <div className="grid grid-cols-3 gap-2 mb-2">
//                  <span className="text-muted-foreground font-medium">Email:</span>
//                  <button 
//                    className="col-span-2 break-all text-left flex items-center hover:text-primary"
//                    onClick={handleEmailClick}
//                    disabled={isDragging}
//                  >
//                    <Mail className="w-4 h-4 mr-1" />
//                    {employee.email}
//                  </button>
//                </div>

//                <div className="grid grid-cols-3 gap-2 mb-2">
//                  <span className="text-muted-foreground font-medium">Extension:</span>
//                  <button 
//                    className="col-span-2 flex items-center hover:text-primary"
//                    onClick={handleExtensionClick}
//                    disabled={isDragging}
//                  >
//                    <Phone className="w-4 h-4 mr-1" />
//                    {employee.extension || 'N/A'}
//                  </button>
//                </div>
//              </div>
//            </div>
//          </div>
//        </DialogContent>
//      </Draggable>
//    </Dialog>
//  );
//};

//export default EmployeeModal;

