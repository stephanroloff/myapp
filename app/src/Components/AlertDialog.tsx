import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

// type AlertDialogProps = React.ComponentProps<'button'>

// const AlertDialog = ({children, ...rest}: AlertDialogProps) => {
const AlertDialogComponent = () => {

    return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="rounded-full">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-cardGray border border-customGraySoft dark:border-customGray">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl">Are you absolutely sure?</AlertDialogTitle>
              <br />
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
};
  
export default AlertDialogComponent;
  