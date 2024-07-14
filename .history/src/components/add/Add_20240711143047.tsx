import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

const Add = (props: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        //add new item
        // mutation.mutate();
        props.setOpen(false)
      };
  return (
    <div>
      
    </div>
  )
}

export default Add
