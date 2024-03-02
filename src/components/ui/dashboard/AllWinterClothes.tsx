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
import { Link } from "react-router-dom";
import WinterClothesLoader from "../../../lib/WinterClothesLoader";
import { useAppSelector } from "../../../redux/hooks";
import { useCureentThemeMode } from "../../../redux/features/theme/themeSlice";

export default function AllWinterClothes() {
  const mode = useAppSelector(useCureentThemeMode);

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
      cancelButtonText: "No, Cancel!",
      confirmButtonText: "Yes, Delete!",
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
    return <WinterClothesLoader />;
  }

  const rows = data.data.map((item: TDataType) => (
    <Table.Tr key={item._id}>
      <Table.Td
        className={`max-w-md ${mode ? "text-white" : "text-[#191F2D]"}`}
      >
        {item.title}
      </Table.Td>
      <Table.Td className={`${mode ? "text-white" : ""}`}>
        {item.category}
      </Table.Td>
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
            <SquarePen
              size={20}
              className={` cursor-pointer ${
                mode ? "text-white" : "text-[#191F2D]"
              }`}
            />
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
      <div className=" flex justify-end">
        <Link
          to="/dashboard/create-winter-clothes"
          className={`flex items-center ${mode ? "bg-[#D53F34]" : "bg-[#191F2D]"} p-3 rounded-md text-white`}
        >
          <SquarePen size={20} color="#fff" className="mr-2" />
          Add Clothes
        </Link>
      </div>
      <div className=" max-w-5xl mx-5 lg:mx-auto my-5 shadow">
        <Table>
          <Table.Thead>
            <Table.Tr className="text-lg">
              <Table.Th
                className={` ${mode ? "text-white" : "text-[#191F2D]"}`}
              >
                Title
              </Table.Th>
              <Table.Th className={` ${mode ? "text-white" : "text-[#191F2D]"}`}>Category</Table.Th>
              <Table.Th className={` ${mode ? "text-white" : "text-[#191F2D]"}`}>Size</Table.Th>
              <Table.Th className={` ${mode ? "text-white" : "text-[#191F2D]"}`}>Action</Table.Th>
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
