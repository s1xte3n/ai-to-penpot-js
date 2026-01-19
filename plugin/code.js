/**
 * AI to Penpot Plugin - Main Code
 * This runs in Penpot's context and has access to the penpot API
 */

console.log('🎨 AI to Penpot plugin loaded! v2');

// Listen for messages from the UI
penpot.ui.onMessage((message) => {
  console.log('Received message from UI:', message);

  if (message.type === 'generate-design') {
    generateDesign(message.data);
  }
});

/**
 * Generate design from JSON data
 */
function generateDesign(jsonData) {
  try {
    const { frame, components } = jsonData;

    // Create board (Penpot renamed createFrame to createBoard)
    const board = penpot.createBoard();
    board.name = frame.name || 'AI Generated Frame';
    board.resize(frame.width || 375, frame.height || 667);

    // Position in center of viewport
    const viewport = penpot.viewport;
    board.x = viewport.center.x - (board.width / 2);
    board.y = viewport.center.y - (board.height / 2);

    // Create components
    components.forEach(comp => {
      createComponent(comp, board);
    });

    // Notify UI of success
    penpot.ui.sendMessage({
      type: 'generation-complete',
      success: true,
      count: components.length
    });

  } catch (error) {
    console.error('Error generating design:', error);
    penpot.ui.sendMessage({
      type: 'generation-complete',
      success: false,
      error: error.message
    });
  }
}

/**
 * Create component based on type
 */
function createComponent(data, parent) {
  switch (data.type) {
    case 'text':
      createText(data, parent);
      break;
    case 'button':
      createButton(data, parent);
      break;
    case 'input':
      createInput(data, parent);
      break;
    case 'rectangle':
      createRectangle(data, parent);
      break;
    default:
      console.warn(`Unknown component type: ${data.type}`);
  }
}

/**
 * Create text element
 */
function createText(data, parent) {
  const text = penpot.createText(data.text || 'Text');
  text.x = parent.x + (data.x || 0);
  text.y = parent.y + (data.y || 0);

  if (data.fontSize) text.fontSize = data.fontSize;
  if (data.fontWeight) text.fontWeight = data.fontWeight;
  if (data.color) text.fills = [{ fillColor: data.color }];

  parent.appendChild(text);
}

/**
 * Create button (rectangle + text)
 */
function createButton(data, parent) {
  const button = penpot.createRectangle();
  button.x = parent.x + (data.x || 0);
  button.y = parent.y + (data.y || 0);
  button.resize(data.width || 200, data.height || 44);
  button.fills = [{ fillColor: data.backgroundColor || '#667eea' }];
  button.borderRadius = data.borderRadius || 6;

  parent.appendChild(button);

  const buttonText = penpot.createText(data.text || 'Button');
  buttonText.x = button.x + 10;
  buttonText.y = button.y + 12;
  buttonText.fills = [{ fillColor: data.textColor || '#ffffff' }];

  parent.appendChild(buttonText);
}

/**
 * Create input field
 */
function createInput(data, parent) {
  const input = penpot.createRectangle();
  input.x = parent.x + (data.x || 0);
  input.y = parent.y + (data.y || 0);
  input.resize(data.width || 300, data.height || 44);
  input.fills = [{ fillColor: '#ffffff' }];
  input.strokes = [{ strokeColor: '#e0e0e0', strokeWidth: 1 }];
  input.borderRadius = 4;

  parent.appendChild(input);

  const label = penpot.createText(data.label || 'Input');
  label.x = input.x + 12;
  label.y = input.y + 12;
  label.fills = [{ fillColor: '#999999' }];
  label.fontSize = 14;

  parent.appendChild(label);
}

/**
 * Create rectangle
 */
function createRectangle(data, parent) {
  const rect = penpot.createRectangle();
  rect.x = parent.x + (data.x || 0);
  rect.y = parent.y + (data.y || 0);
  rect.resize(data.width || 100, data.height || 100);

  if (data.fillColor) {
    rect.fills = [{ fillColor: data.fillColor }];
  }

  parent.appendChild(rect);
}

// Open the plugin UI
penpot.ui.open('AI to Penpot', 'https://s1xte3n.github.io/ai-to-penpot-js/plugin.html', {
  width: 400,
  height: 600
});
