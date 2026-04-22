import { html } from 'satori-html';

export const ogImageMarkup = (title: string, date?: string) => {
  return html`<div
    style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #050505; color: white; font-family: 'Inter'; padding: 60px 80px; position: relative;"
  >
    <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%; margin-bottom: auto;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background-color: white; color: #050505; border-radius: 8px; font-weight: bold; font-size: 20px;">
          A
        </div>
        <div style="font-size: 24px; font-weight: 600; color: #e5e5e5;">
          adsat
        </div>
      </div>
      
      ${date ? `<div style="font-size: 20px; color: #a3a3a3; font-family: monospace;">${date}</div>` : ''}
    </div>
    
    <div style="display: flex; flex-direction: column; width: 100%; gap: 16px;">
      <h1 style="font-size: 64px; font-weight: 700; line-height: 1.2; margin: 0; color: white;">
        ${title}
      </h1>
      <div style="font-size: 24px; color: #a3a3a3;">
        adsat.dev
      </div>
    </div>
  </div>`;
};
