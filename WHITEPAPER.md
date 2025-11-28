# Fedify Studio: A comprehensive ActivityPub development and debugging platform

**White Paper**

*Version 1.0*
*November 2025*

---

## Executive summary

Fedify Studio is a web-based development and debugging platform for ActivityPub, designed as a sister project to the Fedify framework. While existing tools like ActivityPub.Academy and PubKit offer valuable testing capabilities, Fedify Studio aims to provide a more comprehensive, developer-focused toolkit that addresses the full spectrum of ActivityPub development challenges—from initial implementation to production debugging.

The platform will serve as an essential companion for developers building federated applications, offering real-time activity monitoring, detailed failure diagnostics, and interactive testing tools that go beyond what current solutions provide.

---

## Introduction

### The challenge of ActivityPub development

Building federated applications with ActivityPub presents unique challenges that centralized application development does not. Developers must navigate:

- **Protocol complexity**: The ActivityPub family of specifications spans hundreds of pages, including ActivityStreams 2.0, Activity Vocabulary, WebFinger, HTTP Signatures, and numerous Fediverse Enhancement Proposals (FEPs).

- **Interoperability requirements**: Different implementations interpret specifications differently. What works with Mastodon may not work with Lemmy, Pixelfed, or PeerTube.

- **Debugging difficulty**: When federation fails, identifying whether the problem lies in JSON-LD processing, cryptographic signatures, content negotiation, or application logic requires specialized tools.

- **Limited visibility**: Traditional debugging approaches fall short when issues span multiple servers across the internet.

### Current landscape

Several tools currently exist to assist ActivityPub developers:

- **ActivityPub.Academy**: A modified Mastodon instance that displays activities in real-time, excellent for learning but limited in debugging capabilities.

- **PubKit**: Offers fetch, HTTP signature inspection, and temporary inbox features, but lacks comprehensive failure analysis.

- **BrowserPub**: Useful for inspecting ActivityPub objects but focused on read-only exploration.

- **fedify CLI**: Provides `lookup` and `inbox` commands for basic testing, but operates only in terminal environments.

These tools serve important purposes, but none offers a unified platform that combines comprehensive monitoring, detailed diagnostics, and interactive testing in a web-based environment optimized for the development workflow.

---

## Vision

Fedify Studio will be the definitive development companion for ActivityPub implementers, providing:

1. **Complete visibility** into federation traffic with detailed failure analysis
2. **Interactive tools** for testing and validating implementations
3. **Protocol-level debugging** capabilities that expose the full complexity of ActivityPub exchanges
4. **Developer-friendly workflows** that integrate naturally into the development process

---

## Core features

### 1. Activity monitor

The activity monitor serves as an evolution of the `fedify inbox` command, providing a web-based interface for observing ActivityPub traffic in real-time.

**Capabilities:**

- Real-time activity stream with filtering and search
- Detailed view of each activity including full JSON-LD representation
- Request/response headers and timing information
- Activity validation against ActivityStreams vocabulary
- Persistent storage of activity history for later analysis

**Failure diagnostics:**

When activity delivery fails, the monitor provides detailed information about:

- At which stage the failure occurred (DNS resolution, TLS handshake, HTTP request, signature verification, JSON-LD processing, etc.)
- The specific error message and code
- Suggested remediation steps based on common failure patterns
- Comparison with successful deliveries to similar endpoints

**Additional capabilities:**

- **Activity resend**: Retry failed deliveries with optional modifications
- **Activity forwarding**: Route received activities to external endpoints for integration testing

### 2. Object lookup

An enhanced version of `fedify lookup`, the object lookup tool provides comprehensive inspection of any ActivityPub object.

**Features:**

- Fetch and display any ActivityPub object by URL or WebFinger address
- Automatic dereferencing of linked objects
- Multiple view modes (compact JSON-LD, expanded JSON-LD, raw JSON)
- Object validation against ActivityStreams vocabulary
- Visual representation of object relationships
- History of lookups for quick re-access

### 3. WebFinger tester

WebFinger is often the first point of failure in federation. This tool provides comprehensive WebFinger diagnostics.

**Capabilities:**

- Query any WebFinger address and display results
- Validate response format and required fields
- Check CORS headers for browser-based clients
- Verify host-meta configuration
- Test both `acct:` and HTTPS URI schemes
- Diagnose common misconfigurations with actionable suggestions

### 4. NodeInfo inspector

NodeInfo provides essential metadata about federated servers. This tool fetches and validates NodeInfo responses.

**Features:**

- Automatic discovery via well-known endpoints
- Support for NodeInfo 2.0 and 2.1 schemas
- Validation of required and optional fields
- Display of server software, version, and capabilities
- Protocol and service enumeration

### 5. JSON-LD toolkit

JSON-LD processing differences cause many interoperability issues. This toolkit provides essential utilities for working with JSON-LD in the ActivityPub context.

**Tools:**

- **Compaction/Expansion converter**: Transform between compact and expanded JSON-LD forms
- **Context resolver**: Fetch and inspect JSON-LD contexts
- **Frame tool**: Apply JSON-LD framing to reshape data
- **Vocabulary validator**: Check terms against ActivityStreams and extension vocabularies
- **Implementation simulator**: Preview how different implementations (Mastodon, Lemmy, etc.) would process a given document

### 6. HTTP Signatures debugger

HTTP Signatures are critical for authentication but notoriously difficult to debug. This tool demystifies the signing process.

**Capabilities:**

- **Signature verification**: Paste a request and verify its signature
- **Signature generation**: Generate valid signatures for testing
- **Key management**: Import and manage test key pairs
- **Algorithm support**: Both draft-cavage-http-signatures and RFC 9421
- **Diagnostic mode**: Step-by-step breakdown of the signing/verification process
- **Common error detection**: Identify clock skew, malformed headers, and other frequent issues

### 7. Activity builder

Creating valid ActivityPub activities manually is error-prone. The activity builder provides a guided interface for constructing activities.

**Features:**

- Form-based activity construction with validation
- Templates for common activity types (Create, Update, Delete, Follow, Like, Announce, etc.)
- Support for custom extensions and additional properties
- Real-time JSON-LD preview
- Direct transmission to target inboxes
- Save and reload activity templates

---

## Advanced features

### Actor simulator

Create and manage test actors for comprehensive federation testing.

**Capabilities:**

- Generate temporary actors with configurable profiles
- Support for different actor types (Person, Service, Group, Organization, Application)
- Customizable public keys and endpoints
- Simulate behavior patterns of different Fediverse software
- Automated interaction sequences (follow, post, like, boost)

### Federation scenario tester

Pre-defined test scenarios that validate common federation flows.

**Test suites:**

- Follow/Accept/Reject flow
- Post creation and delivery
- Mention handling
- Boost and like propagation
- Delete and Undo processing
- Block and mute behavior

**Customization:**

- Create custom test scenarios
- Save and share test suites
- Integration with CI/CD pipelines via API

### FEP compliance checker

Fediverse Enhancement Proposals extend ActivityPub with community-defined features. This tool validates implementations against specific FEPs.

**Supported FEPs:**

- FEP-e232: Object Links
- FEP-5624: Per-object Actor Key Authentication
- FEP-8fcf: Followers-only Posts
- FEP-044f: Quoted Posts (Quote Posts)
- FEP-5711: Inverse Properties
- Additional FEPs as they are adopted

### Shareable debug sessions

Collaboration is essential when debugging federation issues.

**Features:**

- Generate shareable links to specific debug sessions
- Include captured requests, responses, and analysis
- Annotate sessions with notes and observations
- Export sessions for offline analysis
- Team workspaces for collaborative debugging

---

## Technical architecture

### Deployment model

Fedify Studio will be available in two forms:

1. **Hosted service**: A publicly available instance for quick testing and exploration
2. **Self-hosted**: Docker images and deployment guides for private instances

### Technology stack

- **Backend**: Built with Fedify framework, demonstrating its capabilities
- **Frontend**: Modern web application with real-time updates
- **Storage**: Configurable storage backends for activity persistence
- **API**: RESTful API for integration with development workflows

### Security considerations

- No permanent storage of sensitive data on hosted service
- Automatic expiration of test sessions
- Clear data ownership and privacy policies
- Secure handling of imported keys (client-side only when possible)

---

## Relationship to Fedify

Fedify Studio complements the Fedify framework in several ways:

- **Dogfooding**: The service itself is built with Fedify, serving as a real-world demonstration of the framework's capabilities
- **Integrated experience**: Direct integration with `fedify` CLI for seamless workflow
- **Shared development**: Improvements in Fedify Studio often translate to improvements in Fedify core
- **Documentation**: Examples and tutorials connect both projects

---

## Roadmap

### Phase 1: Foundation

- Activity monitor with basic failure diagnostics
- Object lookup tool
- WebFinger tester
- NodeInfo inspector

### Phase 2: Protocol tools

- JSON-LD toolkit
- HTTP Signatures debugger
- Activity builder (basic)

### Phase 3: Advanced features

- Actor simulator
- Activity builder (advanced with templates)
- Federation scenario tester

### Phase 4: Ecosystem

- FEP compliance checker
- Shareable debug sessions
- API for CI/CD integration
- Team collaboration features

---

## Conclusion

Fedify Studio addresses a critical gap in the ActivityPub development ecosystem. By providing comprehensive, developer-friendly tools for testing, debugging, and understanding federation, it will accelerate the development of high-quality federated applications and strengthen the overall Fediverse ecosystem.

As a sister project to Fedify, Fedify Studio represents our commitment to not just providing a framework for building federated applications, but to supporting the entire development lifecycle with world-class tooling.

---

## About Fedify

Fedify is a TypeScript library for building federated server applications powered by ActivityPub and related standards. It provides type-safe ActivityPub vocabulary, WebFinger client and server, HTTP Signatures, and seamless integration with popular web frameworks. Fedify is supported by the Sovereign Tech Fund and is used in production by projects including Ghost and Hollo.

**Resources:**

- Website: https://fedify.dev/
- GitHub: https://github.com/fedify-dev/fedify
- Documentation: https://fedify.dev/

---

*This white paper is a living document and will be updated as Fedify Studio development progresses.*
