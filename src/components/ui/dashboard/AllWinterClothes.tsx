import Loader from "../../../lib/Loader";
import {
  useDeleteClothesMutation,
  useGetAllClothesQuery,
} from "../../../redux/features/clothe/clotheApi";
import { Table } from "@mantine/core";
import { TDataType } from "../../../types/types";
import { SquarePen, Trash2 } from "lucide-react";
import ModalForm from "../../../utils/ModalForm";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AllWinterClothes() {
  const sizeBorderColors = [
    "bg-blue-600",
    "bg-slate-600",
    "bg-green-600",
    "bg-orange-600",
  ];

  const { data, isLoading } = useGetAllClothesQuery("");
  const [opened, setOpened] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");
  const [deleteClothes] = useDeleteClothesMutation();

  const handleEditButton = (id: string) => {
    setProductId(id);
    setOpened(true);
  };

  const handleDeleteButton = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteClothes(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  const rows = data.data.map((item: TDataType) => (
    <Table.Tr key={item._id}>
      <Table.Td className=" max-w-md">{item.title}</Table.Td>
      <Table.Td>{item.category}</Table.Td>
      <Table.Td>
        {item.size.map((i: string, index: number) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-md text-white ml-1 ${
              sizeBorderColors[index % sizeBorderColors.length]
            }`}
          >
            {i}
          </button>
        ))}
      </Table.Td>
      <Table.Td>
        <div className="flex items-center justify-between">
          <button onClick={() => handleEditButton(item._id)}>
            <SquarePen size={20} className=" cursor-pointer" />
          </button>
          <button onClick={() => handleDeleteButton(item._id)}>
            <Trash2 size={20} color="red" className=" cursor-pointer" />
          </button>
        </div>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <div className=" max-w-5xl mx-5 lg:mx-auto my-5 shadow">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-lg">
              <Table.Th>Title</Table.Th>
              <Table.Th>Category</Table.Th>
              <Table.Th>Size</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
          <Table.Caption>All Winter Clothes Products</Table.Caption>
        </Table>
      </div>
      <ModalForm opened={opened} setOpened={setOpened} productId={productId} />
    </div>
  );
}
