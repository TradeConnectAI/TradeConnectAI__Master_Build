# AI beta route policy

AI call handling and voice beta features must not be exposed on the main public/demo site.

Allowed beta routes:

- /install-skips-demo/ai-call-beta
- /install-skips-demo/admin/voice-beta
- /complete-options-beta/ai-call-beta
- /complete-options-beta/admin/voice-beta

Blocked / redirected generic routes:

- /ai-call-beta
- /admin/voice-beta

Reason:

The main TradeConnectAI demo should stay clean and general.
AI call handling is only available inside branded beta builds for selected customers.
