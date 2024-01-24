// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn read_file(path: String) -> String {
    let contents = std::fs::read_to_string(path)
        .map_err(|e| e.to_string())
        .unwrap_or("fail to read file".to_string());
    contents
}
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![read_file, greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
