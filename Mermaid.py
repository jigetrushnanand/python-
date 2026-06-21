%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#06B6D4', 'edgeLabelBackground':'transparent'}}}%%
flowchart TD
    Dev((👨‍💻 You)) -->|Write Code| Editor[⌨️ Smart Editor]
    Editor -->|Live Preview| Web[🌐 Web View]
    Editor -->|Run Script| Server[🚀 Cloud Compiler]
    
    Server --> Output[🖥 Terminal Output]
    Output -->|Error?| AI[🤖 Fix with AI]
    AI -->|Patches| Editor
    
    style Dev fill:#06B6D4,color:#fff,stroke:none
    style Editor fill:#1E293B,color:#fff,stroke:#334155
    style Server fill:#1E293B,color:#fff,stroke:#334155
    style Output fill:#0F172A,color:#38BDF8,stroke:#334155
    style AI fill:#8B5CF6,color:#fff,stroke:none