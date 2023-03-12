// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{App, AppHandle};

#[tauri::command]
async fn check_update(app: AppHandle) -> Result<(), String> {
    match app.updater().check().await {
        Ok(update_resp) => {
            let has_new_version = update_resp.is_update_available();
            println!("Has new version: {}", has_new_version);
        }
        Err(err) => {
            println!("Error: {}", err);
        }
    };
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![check_update])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
