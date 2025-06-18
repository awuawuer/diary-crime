"use client";
import React from "react";

import { useState } from "react";
import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFileAlt,
  FaTrash,
  FaFileAudio,
  FaFileVideo,
} from "react-icons/fa";

export default function OtherEvidenceUpload() {
  const [imagesSelected, setImagesSelected] = useState<File[]>([]);
  const [videosSelected, setVideosSelected] = useState<File[]>([]);
  const [audioSelected, setAudioSelected] = useState<File[]>([]);
  const [documentsSelected, setDocumentsSelected] = useState<File[]>([]);

  const [tempImages, setTempImages] = useState<File[]>([]);
  const [tempVideos, setTempVideos] = useState<File[]>([]);
  const [tempAudio, setTempAudio] = useState<File[]>([]);
  const [tempDocuments, setTempDocuments] = useState<File[]>([]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "images" | "videos" | "audio" | "documents"
  ) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    if (type === "images") setTempImages(files);
    if (type === "videos") setTempVideos(files);
    if (type === "audio") setTempAudio(files);
    if (type === "documents") setTempDocuments(files);

    e.target.value = "";
  };

  const handleSave = (type: "images" | "videos" | "audio" | "documents") => {
    if (type === "images") {
      setImagesSelected((prev) => [...prev, ...tempImages]);
      setTempImages([]);
    }
    if (type === "videos") {
      setVideosSelected((prev) => [...prev, ...tempVideos]);
      setTempVideos([]);
    }
    if (type === "audio") {
      setAudioSelected((prev) => [...prev, ...tempAudio]);
      setTempAudio([]);
    }
    if (type === "documents") {
      setDocumentsSelected((prev) => [...prev, ...tempDocuments]);
      setTempDocuments([]);
    }
  };

  const handleDelete = (
    type: "images" | "videos" | "audio" | "documents",
    index: number
  ) => {
    if (type === "images")
      setImagesSelected((prev) => prev.filter((_, i) => i !== index));
    if (type === "videos")
      setVideosSelected((prev) => prev.filter((_, i) => i !== index));
    if (type === "audio")
      setAudioSelected((prev) => prev.filter((_, i) => i !== index));
    if (type === "documents")
      setDocumentsSelected((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file: File) => {
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext) return <FaFileAlt className="text-gray-500 text-2xl" />;
    if (["pdf"].includes(ext))
      return <FaFilePdf className="text-red-600 text-2xl" />;
    if (["doc", "docx"].includes(ext))
      return <FaFileWord className="text-blue-600 text-2xl" />;
    if (["xls", "xlsx"].includes(ext))
      return <FaFileExcel className="text-green-600 text-2xl" />;
    if (["mp3", "wav"].includes(ext))
      return <FaFileAudio className="text-purple-600 text-2xl" />;
    if (["mp4", "avi", "mov"].includes(ext))
      return <FaFileVideo className="text-yellow-600 text-2xl" />;
    return <FaFileAlt className="text-gray-500 text-2xl" />;
  };

  const renderFileCard = (
    file: File,
    index: number,
    type: "images" | "videos" | "audio" | "documents"
  ) => (
    <div
      key={index}
      className="flex items-center gap-2 bg-white border rounded-lg shadow-sm px-3 py-2 relative"
    >
      <div>{getFileIcon(file)}</div>
      <div className="text-sm truncate w-32">{file.name}</div>
      <button
        type="button"
        onClick={() => handleDelete(type, index)}
        className="ml-auto text-red-500 hover:text-red-700"
      >
        <FaTrash />
      </button>
    </div>
  );

  return (
    <fieldset className="space-y-8">
      <div className="bg-white p-10 rounded-lg shadow-md col-auto">
        <legend className="text-xl font-semibold text-green-700">
          Other Evidence
        </legend>
        <div className="bg-green-50 p-10 rounded-lg shadow-md grid grid-cols-2 gap-4">
          {/* Upload Images */}
          <div>
            <label className="block font-medium mb-1">Upload Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleFileChange(e, "images")}
              className="w-full border rounded p-2"
            />
            {tempImages.length > 0 && (
              <button
                type="button"
                onClick={() => handleSave("images")}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Images
              </button>
            )}
            <div className="mt-4 flex flex-wrap gap-4">
              {imagesSelected.map((file, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${idx}`}
                    className="w-24 h-24 object-cover rounded border"
                  />
                  <button
                    type="button"
                    onClick={() => handleDelete("images", idx)}
                    className="absolute top-0 right-0 text-red-500 text-xs bg-white p-1 rounded-full shadow"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Upload Documents */}
          <div>
            <label className="block font-medium mb-1">Upload Documents</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt,.xlsx"
              multiple
              onChange={(e) => handleFileChange(e, "documents")}
              className="w-full border rounded p-2"
            />
            {tempDocuments.length > 0 && (
              <button
                type="button"
                onClick={() => handleSave("documents")}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Documents
              </button>
            )}
            <div className="mt-4 flex flex-wrap gap-4">
              {documentsSelected.map((file, idx) =>
                renderFileCard(file, idx, "documents")
              )}
            </div>
          </div>

          {/* Upload Videos */}
          <div>
            <label className="block font-medium mb-1">Upload Videos</label>
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={(e) => handleFileChange(e, "videos")}
              className="w-full border rounded p-2"
            />
            {tempVideos.length > 0 && (
              <button
                type="button"
                onClick={() => handleSave("videos")}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Videos
              </button>
            )}
            <div className="mt-4 flex flex-wrap gap-4">
              {videosSelected.map((file, idx) =>
                renderFileCard(file, idx, "videos")
              )}
            </div>
          </div>

          {/* Upload Audio */}
          <div>
            <label className="block font-medium mb-1">Upload Audio Files</label>
            <input
              type="file"
              accept="audio/*"
              multiple
              onChange={(e) => handleFileChange(e, "audio")}
              className="w-full border rounded p-2"
            />
            {tempAudio.length > 0 && (
              <button
                type="button"
                onClick={() => handleSave("audio")}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Audio
              </button>
            )}
            <div className="mt-4 flex flex-wrap gap-4">
              {audioSelected.map((file, idx) =>
                renderFileCard(file, idx, "audio")
              )}
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
