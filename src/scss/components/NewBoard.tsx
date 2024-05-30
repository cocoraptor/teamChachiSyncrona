import React, { ReactElement, useState } from "react";
import { UserContext } from "./UserContext/UserContext";
import { useContext } from "react";
import { Board } from "./models";
import AddnewBoardButton from "./NewBoardButton";
import BoardList from "./BoardInfo";
import { useTranslation } from "react-i18next";

const AddNewBoard = () => {
  const { newBoard } = useContext(UserContext);
  const createNewBoard = () => {
    newBoard({
      id: Date.now(),
      tasks: [],
      title: "",
    });
    /*const id = board.length + 1;
    const newBoard: Board = { Boards: [], id };
    setBoard([...board, newBoard]);*/
  };

  /*const handleTaskBoardID = (event: MouseEvent) => {
    console.log("estás cogiendo el id majo")
    createNewBoard(id);
  };*/

  const { t } = useTranslation(["common", "list"]);

  return (
    <>
      <div
        className="  List__Container margin__bottom__auto "
        style={{ display: "inline-block" }}
      >
        <button
          style={{ width: "50%" }}
          onClick={createNewBoard}
          className="padding__0 "
        >
          {t("new board")}
        </button>
      </div>
    </>
  );
};

export default AddNewBoard;
