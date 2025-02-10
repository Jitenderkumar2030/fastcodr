import React from "react";
import { Tooltip, message } from "antd";
import { newTerminal } from "./WeIde/components/Terminal/utils/commands";
import { updateFileSystemNow } from "./WeIde/services";
import { useFileStore } from "./WeIde/stores/fileStore";
import { ActionButton } from "./Header/ActionButton";
import { useTranslation } from "react-i18next";

export const OpenDirectoryButton: React.FC = () => {
  const { setEmptyFiles, setIsFirstSend, setIsUpdateSend } = useFileStore();
  const { t } = useTranslation();

  const handleOpenDirectory = async () => {
    try {
      const result = await window.myAPI.dialog.showOpenDialog({
        properties: ["openDirectory"],
      });

      if (!result.canceled && result.filePaths.length > 0) {
        setEmptyFiles();
        const selectedPath = result.filePaths[0];
        await (window as any)?.electron?.ipcRenderer.invoke(
          "node-container:set-now-path",
          selectedPath
        );
        const projectRoot = await (window as any)?.electron?.ipcRenderer.invoke(
          "node-container:get-project-root"
        );

        console.log("Selected directory:", selectedPath);
        console.log("Project root:", projectRoot);

        setTimeout(() => {
          setIsFirstSend();
          setIsUpdateSend();
          setTimeout(() => {
            newTerminal();
            updateFileSystemNow();
          }, 100);
        }, 100);
      }
    } catch (error) {
      console.error("Failed to open directory:", error);
      message.error(t("header.error.open_directory"));
    }
  };

  return (
    <Tooltip
      title={
        <div className="text-xs">
          <div className="font-medium mb-1 text-[#333] dark:text-white">
            {t("header.open_directory")}
          </div>
          <div className="text-[#666] dark:text-gray-300">
            {t("header.open_directory_tips")}
          </div>
        </div>
      }
      overlayClassName="bg-white dark:bg-[#252526] border border-[#e5e5e5] dark:border-[#454545] shadow-lg"
      overlayInnerStyle={{
        padding: "8px 12px",
        borderRadius: "6px",
      }}
      placement="bottom"
    >
      <div className="relative">
        <ActionButton
          onClick={handleOpenDirectory}
          icon={"open"}
          label={t("header.open_directory")}
          className="text-[#424242] dark:text-gray-300 hover:text-[#000] dark:hover:text-white
            bg-white dark:bg-[#333333] hover:bg-[#f5f5f5] dark:hover:bg-[#404040]
            border border-[#e5e5e5] dark:border-[#252525]
            shadow-sm hover:shadow transition-all"
        />
      </div>
    </Tooltip>
  );
};
