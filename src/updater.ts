import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { relaunch } from "@tauri-apps/api/process";

export async function checkNewVersion() {
  try {
    const { shouldUpdate, manifest } = await checkUpdate();
    console.log(manifest)
    console.log(shouldUpdate)
    if (shouldUpdate) {
      // display dialog
      await installUpdate();
      // install complete, restart the app
      await relaunch();
    }
  } catch (error) {
    console.log(error);
  }
}
